import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

import fs from "fs"

const { text } = await generateText({
  model: openai("gpt-4o"),
  prompt: "What is love?",
});

console.log(text);
