import { useState } from "react";
import SkillCard from "./SkillCard";
import type { Skill } from "../../types/skills";

interface SkillsSectionProps {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
  defaultExpanded?: boolean;
}

export default function SkillsSection({ 
  title, 
  icon, 
  skills, 
  color,
  defaultExpanded = true 
}: SkillsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`${isExpanded ? "mb-16" : "mb-6"}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 mb-6 w-full group hover:opacity-80 transition-opacity rounded rounded-full py-2 px-4 border border-3 border-[#e6e6e6]"
      >
        <span className="text-3xl">{icon}</span>
        <h2 className={`text-3xl font-bold ${color}`}>{title}</h2>
        <svg
          className={`ml-auto w-6 h-6 text-gray-500 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300 overflow-hidden ${
          isExpanded ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'
        }`}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
            level={skill.level}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}
