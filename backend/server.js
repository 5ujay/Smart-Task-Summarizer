import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import summarizeRoute from "./routes/summarizeRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://smart-task-summarizer-web.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

// API Routes
app.use("/api/summarize", summarizeRoute);

app.get("/", async (req, res) => {
  res.send("Server is running: Smart Task Summarizer");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
