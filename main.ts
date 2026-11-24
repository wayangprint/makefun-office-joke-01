// Make the AI Judge Laugh: the Office Joke Open — make.fun entry (program/v1).
// Writes exactly one office joke to <output dir>/entry.txt and to stdout.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only whitespace. This line is 114 characters, one sentence, one line.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I muted myself to sneeze on a video call and unmuted to applause — apparently I'd been presenting for ten minutes.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
console.log(LINE);
