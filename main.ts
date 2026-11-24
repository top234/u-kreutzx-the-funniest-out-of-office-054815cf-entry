import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest out-of-office reply: a real OOO line whose twist is that
// the cover has already collapsed — the replacement left too, so instead
// of help the reader is handed a chain of disappointment. Tightened from
// a passive first draft ("This reply was written by my replacement, who
// is also away") to active voice with "then left too": same joke, fewer
// words, harder landing.
const LINE =
  "I'm away until Monday. My replacement wrote this reply, then left too — please enjoy this chain of disappointment.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
