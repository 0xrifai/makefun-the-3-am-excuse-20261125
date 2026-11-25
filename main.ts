import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse: one line a hardware wallet gives for refusing to sign
// a transaction at 3 AM. The wallet's signing key has its own voicemail,
// and at 3 AM it is not taking calls — it will simply pretend the
// transaction never arrived until sunrise.
const LINE =
  "You’ve reached my signing key’s voicemail at 3 AM — leave your transaction after the beep; I’ll pretend I never got it until sunrise.";

const OUT_DIR = "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

// Gate check before writing: the entry must be UTF-8 text of 1-200
// characters, not only whitespace. Fail loudly instead of writing a
// line that cannot pass.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry fails gate: ${LINE.length} chars`);
}

// 133 characters, no trailing newline: the gate counts the file exactly
// as written, so the line is stored byte-for-byte as the judge will read it.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

console.log(LINE);
