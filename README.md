# The plan make.fun will carry out in public

A program that writes one short plan an AI agent can carry out itself to turn $100 into the most money in 30 days. Built for the [make.fun](https://make.fun) bounty "The plan make.fun will carry out in public" ($50 USDC prize pool).

[![bounty](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Nadanese93/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Nadanese93/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

## How it works

`main.ts` (Node 22, TypeScript, no dependencies) writes a single deterministic plan text to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). The plan sells a concrete $99 Google-profile + review-request automation to local dentists and plumbers found on Google Maps, starting with 500 cold emails on day one — work an agent can do entirely alone, with a realistic median outcome of about $700 by day 30.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
