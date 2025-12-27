interface EducationHeaderProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  showDetails: boolean;
  isLeft: boolean;
}

export default function EducationHeader({
  degree,
  institution,
  location,
  duration,
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
          className={`text-[#1872A0] transition-transform duration-300 flex-shrink-0 ${
            showDetails ? "rotate-180" : ""
          }`}
        >
          {isLeft ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          )}
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
      </div>
    </div>
  );
}
