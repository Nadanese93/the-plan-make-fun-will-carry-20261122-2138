import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: email 500 dentists and plumbers from Google Maps, offering Google profile automation + review requests for $99, done in 24h fully by code. Spend $100 on domain and email tool. An agent can prospect 500 businesses a day; a human cannot. Median day 30: ~$700 from 7 clients.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const length = [...PLAN].length;
if (length < 1 || length > 280 || PLAN.trim().length === 0) {
  console.error(
    `Invalid plan length: ${length} code points (must be 1-280 and non-blank).`,
  );
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, PLAN, "utf8");
chmodSync(entryPath, 0o644);
