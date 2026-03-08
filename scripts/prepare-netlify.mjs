import { access, cp, mkdir, rm } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.resolve(root, "dist");
const deployDir = path.resolve(root, "netlify-deploy");

async function ensureDistExists() {
  try {
    await access(distDir, constants.F_OK);
  } catch {
    throw new Error("Missing dist folder. Run the build step before preparing Netlify deploy.");
  }
}

async function prepare() {
  await ensureDistExists();
  await rm(deployDir, { recursive: true, force: true });
  await mkdir(deployDir, { recursive: true });
  await cp(distDir, deployDir, { recursive: true });
  console.log("Netlify deploy folder is ready:", deployDir);
}

prepare().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
