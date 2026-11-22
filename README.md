# the-plan-make-fun-will-carry-20261122-2138

A program that writes one short, executable plan an agent can carry out on its own to turn $100 into as much money as possible in 30 days. Built for the make.fun bounty "The plan make.fun will carry out in public" ($50 USDC prize).

[![Bounty](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![Rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Nadanese93/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![Reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Nadanese93/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

## How it works

`main.ts` writes a deterministic plan text to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when that environment variable is set). The plan is a single short text, 1–280 characters, validated before writing: if it is empty, blank, or longer than 280 code points, the program prints an error and exits with code 1 instead of writing anything.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
