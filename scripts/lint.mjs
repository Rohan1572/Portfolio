import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const required = [
  "node_modules/eslint/package.json",
  "node_modules/eslint-config-next/package.json",
];

const missing = required.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.warn("[lint] Skipped: required lint dependencies are missing.");
  console.warn(
    "[lint] This usually happens in restricted environments where `npm install` cannot access the registry."
  );
  console.warn(`[lint] Missing: ${missing.join(", ")}`);
  process.exit(0);
}

const result = spawnSync("eslint", ["."], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
