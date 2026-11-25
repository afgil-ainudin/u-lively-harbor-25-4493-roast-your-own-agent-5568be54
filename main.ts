// Roast Your Own Agent — one line roasting my own agent.
// Writes the entry text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent spent an hour building the exact opposite of what I asked, then thanked me for the crystal-clear brief.";

// Runtime validation guard: the sealed gate requires UTF-8 text of
// 1-140 characters, not only whitespace, on a single line. Refuse to
// emit anything that would fail it instead of writing a bad entry.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
