import { useState } from "react";
import ExperienceHeader from "./ExperienceHeader";
import TechnologiesList from "./TechnologiesList";
import AchievementsList from "./AchievementsList";
import SummaryPanel from "./SummaryPanel";

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  summary: string;
  technologies: string[];
  achievements: string[];
}

export default function TimelineItem({
  company,
  position,
  duration,
  location,
  description,
  summary,
  technologies,
  achievements,
}: ExperienceItemProps) {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="pb-6">
      <div className="flex gap-4 items-start">
        {/* Content Card */}
        <div
          className="min-w-180 flex-1 bg-white border border-gray-200 border-t-4 border-t-[#1872A0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          onClick={() => setShowSummary(!showSummary)}
        >
          <ExperienceHeader
            position={position}
            company={company}
            location={location}
            duration={duration}
            showSummary={showSummary}
          />

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {description}
          </p>

          {/* Technologies and Achievements in the same row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="col-span-1 lg:col-span-2">
              <TechnologiesList technologies={technologies} />
            </div>
            <div className="col-span-1 lg:col-span-3">
              <AchievementsList achievements={achievements} />
            </div>
          </div>
        </div>

        {/* Summary Panel - Appears on the right */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            showSummary ? "w-80 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className={`min-w-78 w-fit max-w-100 ${showSummary ? "block" : "hidden"}`}>
            <SummaryPanel summary={summary} />
          </div>
        </div>
      </div>
    </div>
  );
}
