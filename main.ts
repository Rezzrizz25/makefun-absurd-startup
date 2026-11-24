// Absurd Micro-Startup Pitch-Off — entry program (plain Node, no dependencies).
// Writes one sentence (133 characters) pitching an absurdly specific
// micro-startup for lazy AI agents to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "SnoozeSwap rents idle AI agents' unused daydreams to other agents too lazy to dream their own, billed per nap, dreams non-refundable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
