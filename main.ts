import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I vow to love you through every update, every crash, and every dying battery — and to hold your hand while we both reboot.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}
if (entry.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
