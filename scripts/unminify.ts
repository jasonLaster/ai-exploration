import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

import fs from "fs"

const minifiedSource = fs.readFileSync('./inputs/generated.tsx', 'utf8')
// console.log(minifiedSource.substring(0, 100))

const { text } = await generateText({
  model: openai("gpt-3.5-turbo"),
  prompt: `Unminify this source code: \n \`\`\`\n${minifiedSource.substring(0, 10000)}\n\`\`\``
});

console.log(text);
