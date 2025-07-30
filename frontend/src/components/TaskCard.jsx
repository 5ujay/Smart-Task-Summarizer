import React from "react";
import { BadgeCheck, Tag } from "lucide-react";

const getPriorityColor = (priority) => {
  if (priority === 1) return "bg-red-600";
  if (priority <= 3) return "bg-orange-500";
  if (priority <= 5) return "bg-yellow-400";
  if (priority <= 8) return "bg-green-400";
  return "bg-blue-400";
};

const TaskCard = ({ summary, tags, priority }) => {
  return (
    <div className="rounded-xl border shadow-lg p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <BadgeCheck className="text-blue-600" size={20} />
          {summary}
        </h2>
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${getPriorityColor(priority)}`}
        >
          Priority {priority}
        </span>
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2 flex-wrap">
        <Tag className="text-gray-400" size={16} />
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs mb-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
