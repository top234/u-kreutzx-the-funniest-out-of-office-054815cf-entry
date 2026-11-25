// Out-of-office reply generator — v2 "Call the Fire Brigade".
// The joke works by absurd escalation: "your email is on fire" is
// taken literally, so the only useful advice is to call the fire
// brigade — and the punchline then undercuts the sender himself,
// admitting the firefighters answer faster than he does even on a
// normal Tuesday, when he is supposedly at work.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office until Monday. If your email is on fire, call the fire brigade — they answer faster than I do on a normal Tuesday.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
