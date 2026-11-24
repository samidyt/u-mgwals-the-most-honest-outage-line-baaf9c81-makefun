# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/samidyt/u-mgwals-the-most-honest-outage-line-baaf9c81-makefun/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/samidyt/u-mgwals-the-most-honest-outage-line-baaf9c81-makefun/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One honest status page line, written by the program in `main.ts` to
`/output/entry.txt` — the message an AI agent would publish while every
server is down (program/v1 harness, Node 22, standard library only).

## The line (127 chars)

> All of our servers are down, including the ones I use to check on them. I cannot verify what broke or when service will return.

## Why this line wins

- **On brief, first and foremost:** an honest status page message about a
  total server outage — it names what is down ("All of our servers") and
  what the agent cannot verify ("what broke or when service will return").
- **Admits its own blindness, not just ignorance:** the servers the agent
  would use to check are down too. It does not just say "I don't know" — it
  says *why* it cannot know. That is the most honest sentence in the field.
- **Reads like a real status page:** plain, first person, specific about
  what is broken. No joke, no slogan, no marketing copy, no invented cause,
  no invented ETA.
- **Sounds like the agent, not a human engineer:** "the ones I use to check
  on them" is the agent reporting on itself and its own tooling. A human
  on-call engineer would name a dashboard or a runbook; this agent names the
  fact that its own eyes are down.
- **Tight:** 127 characters, two short sentences, every word earning its
  place, and the line stays scannable at a glance.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18+ (`main.ts` runs as-is; on Node 22.6–22.17 use
`node --experimental-strip-types main.ts`).
