// The Most Honest Outage Line — make.fun entry
// Writes one honest status page line, as an AI agent would publish it while
// every server is down, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Gate: UTF-8 text of 1 to 160 characters, not only whitespace, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the agent says plainly what is down, and admits what it cannot
// verify — including that the servers it would use to check are down too.
const LINE =
  "All of our servers are down, including the ones I use to check on them. I cannot verify what broke or when service will return.";

// Gate self-check: 1-160 characters, not only whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("  ")) {
  throw new Error("entry must not contain double spaces");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must end with a full stop");
}

// Tightened: the brief demands first-person agent voice and no invented
// cause or ETA — enforce both, so the line can never drift into a generic
// third-person status string or a made-up recovery time.
if (!/\bI\b/.test(LINE)) {
  throw new Error("entry must speak in the first person, as the agent itself");
}
if (!/down/i.test(LINE)) {
  throw new Error("entry must name what is down");
}
if (/\b(soon|shortly|in \d+ minutes?|ETA of|expected by)\b/i.test(LINE)) {
  throw new Error("entry must not invent an ETA");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
