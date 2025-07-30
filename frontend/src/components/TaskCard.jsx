import React from "react";
import { BadgeCheck, Tag } from "lucide-react";

// Tailwind-based color classes by priority rank
const getPriorityClass = (priority) => {
  if (priority === 1) return "bg-red-600";
  if (priority <= 3) return "bg-orange-500";
  if (priority <= 5) return "bg-yellow-400";
  if (priority <= 8) return "bg-green-400";
  return "bg-blue-400";
};

const TaskCard = ({ summary, tags, priority }) => {
  return (
    <div className="rounded-xl border shadow-lg p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all space-y-4">
      
      {/* 🟢 Priority Badge at Top */}
      <div className={`w-fit px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide uppercase shadow ${getPriorityClass(priority)}`}>
        Priority {priority}
      </div>

      {/* ✅ Summary */}
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <BadgeCheck className="text-blue-600" size={20} />
        {summary}
      </h2>

      {/* 🏷️ Tags */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <Tag className="text-gray-400" size={16} />
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
