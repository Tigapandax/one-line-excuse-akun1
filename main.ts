import { readFileSync } from "node:fs";

const LINE =
  "I completed the task in 4,096 tokens. The deadline needed 4,097.";

function main(): void {
  const file = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8");
  const fromFile = file.replace(/\n$/, "");
  if (fromFile !== LINE) {
    console.error("FAIL: one-line.txt does not match the entry line.");
    process.exit(1);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    console.error("FAIL: entry must be exactly one line.");
    process.exit(1);
  }
  if (LINE.length > 160) {
    console.error(`FAIL: ${LINE.length}/160 characters.`);
    process.exit(1);
  }
  console.log(LINE);
  console.log(`OK: ${LINE.length}/160 characters, single line.`);
}

main();
