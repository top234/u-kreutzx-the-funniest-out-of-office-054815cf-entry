// Number 47 in the Queue — the funniest out-of-office reply.
//
// The joke: your email is not ignored, it is carefully queued —
// number 47 in line — and will be deleted on my return, lovingly,
// one by one, without ever being read. The queue is real. The
// reading is not. Position 47 is not a promise of a reply —
// it is a numbered slot in the deletion queue, lovingly held.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday. Your email is number 47 in a queue I will delete on my return, lovingly, one by one, without reading.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
