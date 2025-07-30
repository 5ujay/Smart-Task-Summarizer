import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "Smart Task Summarizer",
  },
});

export const summarizeTasksWithAI = async (tasks) => {
  const prompt = `
You are a smart assistant. For each messy task below:

1. Summarize the task in ≤ 12 words.
2. Add 1–2 tags (like: #urgent, #frontend, #client, #backend).
3. Rank the tasks from 1 (most important) to ${tasks.length} (least important).

Return a pure JSON array like:
[
  {
    "summary": "short summary here",
    "tags": ["#tag1", "#tag2"],
    "priority": 1
  },
  ...
]

Only return the JSON array. No explanation, no markdown, no extra text.

Tasks:
${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}
`;

  const res = await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });

  const raw = res.choices[0].message.content.trim();

  try {
    // Some models wrap JSON in markdown ```, remove it safely
    const cleaned = raw
      .replace(/^```json/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    const json = JSON.parse(cleaned);
    return json;
  } catch (err) {
    console.error("❌ Failed to parse:", err);
    console.log("🔎 Raw response:", raw);
    throw new Error("❌ Failed to parse JSON from AI response");
  }
};
