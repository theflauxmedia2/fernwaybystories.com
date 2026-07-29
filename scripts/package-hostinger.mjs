#!/usr/bin/env node
/**
 * @deprecated Use `npm run build` then `npm run zip` instead.
 * Kept as an alias for the full build + zip workflow.
 */
import { execSync } from "node:child_process";

const ROOT = process.cwd();

execSync("npm run build && npm run zip", { stdio: "inherit", cwd: ROOT, shell: true });
