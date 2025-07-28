"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

const timeline = [
  {
    day: "Day 1",
    title: "HTML & CSS Basics",
    time: "6:00 PM - 8:00 PM",
    topics: ["HTML5 Structure", "CSS Styling", "Flexbox & Grid"],
  },
  {
    day: "Day 2",
    title: "Responsive Design",
    time: "6:00 PM - 8:00 PM",
    topics: ["Media Queries", "Mobile-First", "Modern Layouts"],
  },
  {
    day: "Day 3",
    title: "JavaScript Fundamentals",
    time: "6:00 PM - 8:00 PM",
    topics: ["Variables", "Functions", "DOM Manipulation"],
  },
  {
    day: "Day 4",
    title: "React Basics",
    time: "6:00 PM - 8:00 PM",
    topics: ["Components", "Props & State", "Hooks"],
  },
  {
    day: "Day 5",
    title: "Project Showcase",
    time: "6:00 PM - 8:00 PM",
    topics: ["Group Presentation", "Live Deployment", "Q&A"],
  },
];

const Timeline = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">5-Day Learning Timeline</h2>
        <p className="text-gray-600">Step-by-step journey from basics to a complete project.</p>
      </div>

      <div className="space-y-12 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4 mb-2">
              <CalendarDays className="text-blue-500" size={20} />
              <span className="text-blue-600 font-medium">{item.day}</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{item.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Clock size={16} className="text-blue-400" />
              {item.time}
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
              {item.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
