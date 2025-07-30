import { summarizeTasksWithAI } from "../services/openaiService.js";

export async function summarizeTasks(req, res) {
  try {
    const { tasks } = req.body;
    const result = await summarizeTasksWithAI(tasks);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Summarization error:", error.message);
    res.status(500).json({ error: "Summarization failed" });
  }
}
