interface EducationHeaderProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  showDetails: boolean;
  isLeft: boolean;
}

export default function EducationHeader({
  degree,
  institution,
  location,
  duration,
  grade,
  showDetails,
  isLeft,
}: EducationHeaderProps) {
  return (
    <div>
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-base font-bold text-gray-800 leading-tight">
          {degree}
        </h3>
        {/* Click indicator - arrow points right for left cards, left for right cards */}
        <span
          className={`text-[#1872A0] text-sm transition-transform duration-300 flex-shrink-0 ${
            showDetails ? "rotate-180" : ""
          }`}
        >
          {isLeft ? "→" : "←"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-[#1872A0] font-semibold mb-0.5">
          {institution}
        </p>
        <span className="text-gray-400">•</span>
        <p className="text-sm text-gray-600 mb-0.5">{location}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <span>{duration}</span>
        <span className="text-gray-400">•</span>
        <span className="text-[#1872A0] font-medium">{grade}</span>
      </div>
    </div>
  );
}
