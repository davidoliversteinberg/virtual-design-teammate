#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CHECK_INTERVAL_MS = 7 * 24 * 60 * 60 * 1000;
const REMOTE_MANIFEST_URL =
  "https://raw.githubusercontent.com/davidoliversteinberg/frontend-designer/main/.claude-plugin/plugin.json";
const skillDirectory = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cacheDirectory =
  process.env.VIRTUAL_DESIGN_TEAMMATE_CACHE_DIR ??
  path.join(os.homedir(), ".cache", "frontend-designer");
const cachePath = path.join(cacheDirectory, "update-check.json");
const force = process.argv.includes("--force");
const outputJson = process.argv.includes("--json");

function parseVersion(source) {
  const match = source.match(/\bversion:\s*["']([^"']+)["']/);
  if (!match) throw new Error("Could not read the installed frontend-designer version.");
  return match[1];
}

function compareVersions(left, right) {
  const normalize = (version) =>
    version.split("-")[0].split(".").map((part) => Number(part) || 0);
  const leftParts = normalize(left);
  const rightParts = normalize(right);
  const length = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < length; index += 1) {
    const difference = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (difference !== 0) return Math.sign(difference);
  }
  return 0;
}

async function readCache() {
  try {
    return JSON.parse(await readFile(cachePath, "utf8"));
  } catch {
    return null;
  }
}

async function writeCache(value) {
  try {
    await mkdir(cacheDirectory, { recursive: true });
    await writeFile(cachePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
    return true;
  } catch {
    return false;
  }
}

function emit(result) {
  if (outputJson) {
    process.stdout.write(`${JSON.stringify(result)}\n`);
    return;
  }

  if (result.status === "update-available") {
    process.stdout.write(
      `Frontend Designer update available: ${result.localVersion} -> ${result.remoteVersion}. Notify the user; do not update automatically.\n`,
    );
  } else if (result.status === "up-to-date") {
    process.stdout.write(`Frontend Designer is up to date (${result.localVersion}).\n`);
  } else if (result.status === "local-newer") {
    process.stdout.write(
      `Installed Frontend Designer (${result.localVersion}) is newer than published main (${result.remoteVersion}).\n`,
    );
  } else {
    process.stdout.write(
      "Frontend Designer update check unavailable; continuing without blocking the task.\n",
    );
  }
}

function resultFor(localVersion, remoteVersion, checkedAt, cached) {
  const comparison = compareVersions(localVersion, remoteVersion);
  return {
    status:
      comparison < 0 ? "update-available" : comparison > 0 ? "local-newer" : "up-to-date",
    localVersion,
    remoteVersion,
    checkedAt,
    cached,
  };
}

const localVersion = parseVersion(
  await readFile(path.join(skillDirectory, "SKILL.md"), "utf8"),
);
const cached = await readCache();
const checkedTime = cached?.checkedAt ? Date.parse(cached.checkedAt) : Number.NaN;
const cacheIsFresh = Number.isFinite(checkedTime) && Date.now() - checkedTime < CHECK_INTERVAL_MS;

if (!force && cacheIsFresh) {
  if (cached.status === "ok" && cached.remoteVersion) {
    emit(resultFor(localVersion, cached.remoteVersion, cached.checkedAt, true));
  } else {
    emit({ status: "unavailable", localVersion, checkedAt: cached.checkedAt, cached: true });
  }
  process.exit(0);
}

const checkedAt = new Date().toISOString();

try {
  let remoteVersion = process.env.VIRTUAL_DESIGN_TEAMMATE_REMOTE_VERSION;
  if (!remoteVersion) {
    const response = await fetch(REMOTE_MANIFEST_URL, {
      headers: { "user-agent": "frontend-designer-update-check" },
    });
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}.`);
    const manifest = await response.json();
    remoteVersion = manifest.version;
  }
  if (!remoteVersion) throw new Error("The published manifest has no version.");

  await writeCache({
    status: "ok",
    checkedAt,
    remoteVersion,
    source: REMOTE_MANIFEST_URL,
  });
  emit(resultFor(localVersion, remoteVersion, checkedAt, false));
} catch (error) {
  await writeCache({
    status: "unavailable",
    checkedAt,
    message: error instanceof Error ? error.message : String(error),
    source: REMOTE_MANIFEST_URL,
  });
  emit({ status: "unavailable", localVersion, checkedAt, cached: false });
}
