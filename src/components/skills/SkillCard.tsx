import { useState } from "react";
import { getLevelColor } from "../../utils/skillsConfig";

interface SkillCardProps {
  name: string;
  description: string;
  level: string;
  percentage: number;
}

export default function SkillCard({ name, description, level, percentage }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mt-2">Click to see details</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-[#1872A0]/5 to-[#1872A0]/10 border-2 border-[#1872A0]/30 rounded-xl shadow-md p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {description}
            </p>
          </div>

          <div className="space-y-3">
            {/* Level badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-600">Level:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                  level
                )}`}
              >
                {level}
              </span>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-600">
                  Expertise:
                </span>
                <span className="text-xs font-bold text-[#1872A0]">
                  {percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#1872A0] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
