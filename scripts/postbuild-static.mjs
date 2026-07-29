#!/usr/bin/env node
/**
 * Post-process Next.js static export for shared hosting (e.g. Hostinger).
 *
 * Apache on many hosts blocks folders starting with underscore, so Next's
 * default /_next/ path is renamed to /next-assets/ and all references are
 * rewritten. Run automatically after `next build` via npm run build.
 */
import { existsSync } from "node:fs";
import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out");
const NEXT_SOURCE = "_next";
const NEXT_TARGET = "next-assets";
const REWRITE_EXTENSIONS = /\.(html|js|css|json|txt|webmanifest)$/i;

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

async function patchNextAssetPaths(outDir) {
  const sourcePath = path.join(outDir, NEXT_SOURCE);
  const targetPath = path.join(outDir, NEXT_TARGET);

  if (!existsSync(sourcePath)) {
    throw new Error(
      `${NEXT_SOURCE}/ folder not found in out/. Ensure next.config.ts has output: "export".`,
    );
  }

  if (existsSync(targetPath)) {
    await rm(targetPath, { recursive: true, force: true });
  }

  await rename(sourcePath, targetPath);

  let patchedFiles = 0;
  const files = await collectFiles(outDir);

  for (const file of files) {
    if (!REWRITE_EXTENSIONS.test(file)) continue;

    const original = await readFile(file, "utf8");
    if (!original.includes(NEXT_SOURCE)) continue;

    const updated = original.replaceAll("/_next/", `/${NEXT_TARGET}/`);
    if (updated !== original) {
      await writeFile(file, updated);
      patchedFiles += 1;
    }
  }

  console.log(`  Renamed /_next/ → /${NEXT_TARGET}/`);
  console.log(`  Patched ${patchedFiles} file(s)`);
}

async function verifyExport(outDir) {
  const indexHtml = path.join(outDir, "index.html");
  if (!existsSync(indexHtml)) {
    throw new Error("out/index.html was not created.");
  }

  const html = await readFile(indexHtml, "utf8");
  if (html.includes("/_next/")) {
    throw new Error("Build still references /_next/ — asset rewrite failed.");
  }

  const htaccess = path.join(outDir, ".htaccess");
  if (!existsSync(htaccess)) {
    throw new Error("out/.htaccess missing — copy public/.htaccess into the export.");
  }

  const cssDir = path.join(outDir, NEXT_TARGET, "static", "chunks");
  if (!existsSync(cssDir)) {
    throw new Error(`${NEXT_TARGET}/static/chunks/ missing — CSS will not load.`);
  }

  const cssFiles = (await readdir(cssDir)).filter((name) => name.endsWith(".css"));
  if (cssFiles.length === 0) {
    throw new Error("No CSS files found in export.");
  }

  console.log(`  Verified CSS: ${NEXT_TARGET}/static/chunks/${cssFiles[0]}`);
  console.log(`  Verified .htaccess`);
}

async function main() {
  if (!existsSync(OUT_DIR)) {
    throw new Error("out/ folder not found. Run next build first.");
  }

  console.log("\nPost-build — preparing static export for hosting…\n");
  await patchNextAssetPaths(OUT_DIR);
  await verifyExport(OUT_DIR);
  console.log("\nDeploy-ready folder: out/");
  console.log("  Zip the contents of out/ and upload to your host's public_html.\n");
}

main().catch((error) => {
  console.error(`\nPost-build failed: ${error.message}`);
  process.exit(1);
});
