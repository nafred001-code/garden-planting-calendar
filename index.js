#!/usr/bin/env node
// garden-planting-calendar
// Usage: node index.js <path-to-input-file>
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { loadModel, completion, unloadModel, LLAMA_3_2_1B_INST_Q4_0 } from '@qvac/sdk';

const inputPath = process.argv[2] || "seeds.example.txt";

if (!existsSync(inputPath)) {
  console.error('Usage: node index.js <path-to-input-file>');
  process.exit(1);
}

const input = readFileSync(inputPath, 'utf-8').trim();

console.log('Loading language model on-device...');
const modelId = await loadModel({ modelSrc: LLAMA_3_2_1B_INST_Q4_0 });

const prompt = `Create a month-by-month planting calendar for the seeds and zone below. For each month list what to start indoors, sow outdoors, or transplant. Output markdown with a heading per month. Only include months with tasks.

${input}`;

const { tokenStream } = completion({ modelId, history: [{ role: 'user', content: prompt }], stream: true });

let output = '';
console.log('\nResult:\n');
for await (const token of tokenStream) {
  process.stdout.write(token);
  output += token;
}
console.log();

writeFileSync("planting-calendar.md", output.trim() + '\n');
console.log('\nSaved to planting-calendar.md');

await unloadModel({ modelId });
