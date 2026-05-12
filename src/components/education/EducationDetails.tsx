import type { EducationData } from "../../types/education";
import CoursesList from "./CoursesList";
import EducationAchievements from "./EducationAchievements";

interface EducationDetailsProps {
  field: string;
  description: string;
  link?: EducationData["link"];
  courses?: string[];
  achievements?: string[];
}

export default function EducationDetails({
  field,
  description,
  link,
  courses = [],
  achievements = [],
}: EducationDetailsProps) {
  return (
    <div className="w-100">
      <div className="bg-[#1872A0]/5 border-2 border-[#1872A0]/30 rounded-xl p-4">
        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-bold text-[#1872A0] mb-2">
            Field of Study
          </h4>
          <span className="text-gray-400 mb-2">•</span>
          <p className="text-gray-800 font-semibold text-sm mb-2">{field}</p>
        </div>
        <p className="text-gray-700 text-xs leading-relaxed mb-3">
          {description}
        </p>

        {/* Courses and Achievements in same row */}
        <div className="flex gap-3">
          <div className={`${achievements.length > 0 ? "flex-1" : ""}`}>
            <CoursesList courses={courses} />
          </div>
          <div className="flex-1">
            <EducationAchievements achievements={achievements} />
          </div>
        </div>
        <div>
          {link && (
            <div className="mt-3">
              <h4 className="text-xs font-semibold text-gray-700 mb-1.5">
                Badge
              </h4>
              <a href={link.ref} target="_blank reelnoopener">
                {link.img ? (
                  <img src={link.img} alt={link.alt || "Technology logo"} />
                ) : (
                  "Certificate"
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
