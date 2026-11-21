// the photograph ships in the repository; this program just places it.
import fs from "node:fs";
import path from "node:path";

const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";

fs.mkdirSync(OUT, { recursive: true });
fs.copyFileSync(
  path.join(import.meta.dirname, "entry.png"),
  path.join(OUT, "entry.png")
);
