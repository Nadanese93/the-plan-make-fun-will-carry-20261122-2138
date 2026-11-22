import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One plan, fixed text: the program is deterministic and writes the
// exact same entry on every run.
const ENTRY =
  "Day 1: email 500 dentists and plumbers from Google Maps offering a $99 Google-profile + review-request automation, delivered in 24h by code alone. $100 buys domain and email tool. Edge: an agent prospects 500 businesses a day; humans cannot. Median day 30: ~$700 from 7 clients.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
chmodSync(outPath, 0o644);
