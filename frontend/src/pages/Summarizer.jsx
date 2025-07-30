// ✅ Simplified, clean UI for src/pages/Summarizer.jsx
import React, { useState } from "react";
import api from "../services/api";
import TaskCard from "../components/TaskCard";
import { LoaderCircle, FileText } from "lucide-react";

const Summarizer = () => {
  const [tasksInput, setTasksInput] = useState("");
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tasks = tasksInput.split("\n").filter(Boolean);
    setLoading(true);

    try {
      const res = await api.post("/summarize", { tasks });
      setSummaryData(res.data.result);
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Smart Task Summarizer
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-base font-medium text-gray-700">
            Enter your tasks (one per line):
          </label>
          <textarea
            className="w-full h-60 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm"
            placeholder="e.g. Fix login bug, complete the work, meeting with client"
            value={tasksInput}
            onChange={(e) => setTasksInput(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            {loading && <LoaderCircle className="animate-spin" size={18} />} Summarize Tasks
          </button>
        </form>

        {summaryData.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FileText size={20} className="text-blue-500" /> Task Summaries
            </h2>
            <div className="grid gap-4">
              {summaryData.map((item, idx) => (
                <TaskCard key={idx} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summarizer;
