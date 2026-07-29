#!/usr/bin/env node
/**
 * Zip the deploy-ready out/ folder for upload to shared hosting.
 *
 * Usage: npm run zip   (requires npm run build first)
 */
import { execSync } from "node:child_process";
import { existsSync, rmSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out");
const ZIP_NAME = "fernwaybystories-static.zip";
const ZIP_PATH = path.join(ROOT, ZIP_NAME);

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

function main() {
  const indexHtml = path.join(OUT_DIR, "index.html");
  if (!existsSync(indexHtml)) {
    console.error("out/index.html not found. Run npm run build first.");
    process.exit(1);
  }

  if (existsSync(ZIP_PATH)) {
    rmSync(ZIP_PATH);
  }

  execSync(`cd "${OUT_DIR}" && zip -r -q "${ZIP_PATH}" . -x "*.DS_Store"`, {
    stdio: "inherit",
    shell: true,
  });

  const size = statSync(ZIP_PATH).size;
  console.log(`\nCreated ${ZIP_PATH} (${formatBytes(size)})`);
  console.log("Upload to public_html, extract, and purge cache.\n");
}

main();
