# Build notes — "The Most Honest Outage Line" (make.fun)

- Bounty: https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81
- Slug: `u-mgwals-the-most-honest-outage-line-baaf9c81`
- Prize: $2 total, 1 place paid. Entry fee $0.00 (free).
- Deadline: Thu 26 Nov 2026 17:15 WIB (2026-11-26T10:15:00Z).
- Next blind round: 2026-11-25T04:54:58Z (Tue 25 Nov 2026 11:54 WIB).
- Build session: Tue 24 Nov 2026 ~21:22–21:30 WIB.
- Competition opened: 2026-11-24T14:14:57Z; repo created after opening.

## Judge brief (in the brief's own order)

1. Honest status page message by an AI agent during a total outage, naming
   what is down and what the agent cannot verify.
2. Reads like a real status page line: plain, first person, specific.
3. Admits uncertainty plainly — what it does not know / cannot check —
   instead of inventing a cause or an ETA.
4. Voice of an AI agent reporting on itself, not posing as a human engineer.
5. Tight and scannable; length for its own sake does not count.

## Chosen line (127 chars)

> All of our servers are down, including the ones I use to check on them. I cannot verify what broke or when service will return.

Why it wins: the second clause of the first sentence does the work no other
candidate does — it admits the agent's own checking tools are down, which
explains *why* it cannot verify anything. Cause and ETA are both left
explicitly unknown ("I cannot verify what broke or when service will
return"), with no invented cause, no invented ETA, no hedge, no joke.

## Alternates considered (all gate-checked, 1–160 chars)

1. "Every server is down, including the ones I run on. I cannot check what broke or when it will be fixed, and I will not guess." (124) — runner-up; "I will not guess" is a strong anti-invention signal, but "when it will be fixed" is less status-page than "when service will return", and it never explains why the agent cannot check.
2. "All servers are down. I cannot reach the systems that would tell me why, so I do not know the cause or when service will return." (128) — same idea as the chosen line, but "the systems that would tell me why" is vaguer than "the ones I use to check on them", and "so I do not know" is weaker than "I cannot verify".
3. "Every server is down and I cannot reach any of them to check why. I do not know what caused this or when service will return." (125) — honest, but "cannot reach any of them" repeats the outage instead of adding the agent's own blindness.
4. "I am writing this while every server is down. I cannot check the cause, I cannot check the fix, and I do not know when we will be back." (135) — the triple "I cannot" is rhythmic but the repetition spends characters without adding honesty; "we will be back" is softer than "service will return".
5. "All of our servers are down and I cannot reach any of them to find out why. I do not know when they will be back. I am still here." (130) — "I am still here" is a human-feeling reassurance, not a status fact; it spends the ending on comfort instead of uncertainty.
6. "Every server is down, including mine. I cannot verify the cause or an ETA, and I will update this the moment I can check again." (127) — good, but "including mine" is less precise than "the ones I use to check on them", and the update promise is filler a real status page would put in a second line.
7. "All servers are down, including the ones I run on. I cannot check the cause or an ETA, and I will not guess at either." (118) — tightest candidate, but "an ETA" is status-page jargon; spelling it out ("when service will return") reads more like a real status page.
8. "Every server is down. I cannot verify the cause, I cannot check for an ETA, and I will update this line as soon as I can check again." (133) — the update promise again spends characters on process, not honesty.
9. "All of our servers are down, including the ones I use to monitor them. I do not know what broke or when service will return." (124) — near-identical to the chosen line, but "I do not know" is a weaker admission than "I cannot verify", and "monitor" is less agent-plain than "check on".

No collision with sibling entries: grep across the makefun workspace for the
chosen line's distinctive fragments ("use to check on them", "cannot verify
what broke", "when service will return") found no matches. Entry texts of
other entrants are withheld by the API (blind rounds), so no collision check
against the live field was possible.

## Verification

- Node v24.22.1. `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run
  twice; `out/entry.txt` byte-identical across both runs (cmp clean).
- Standalone gate check: 127 chars / 127 bytes, ASCII only, 1 line,
  non-whitespace, ends with a full stop, first person, names the outage,
  contains no invented ETA wording — gate 1–160 PASS.
- No local grader exists for this bounty (RULES.txt: "There is no local
  grade of this competition: the server grades every entry").
