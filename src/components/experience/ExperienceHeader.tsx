interface ExperienceHeaderProps {
  position: string;
  company: string;
  location: string;
  duration: string;
  showSummary: boolean;
}

export default function ExperienceHeader({
  position,
  company,
  location,
  duration,
  showSummary,
}: ExperienceHeaderProps) {
  return (
    <div className="mb-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{position}</h3>
          <div className="flex flex-wrap items-center gap-2 text-[#1872A0] font-semibold mb-1">
            <span>{company}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 font-normal">{location}</span>
          </div>
          <p className="text-xs text-gray-500 font-medium">{duration}</p>
        </div>
        {/* Click indicator */}
        <div className="text-[#1872A0] text-sm font-medium flex items-center gap-1 flex-shrink-0">
          <span className="hidden sm:inline">Details</span>
          <span
            className={`transition-transform duration-300 ${
              showSummary ? "rotate-180" : ""
            }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
