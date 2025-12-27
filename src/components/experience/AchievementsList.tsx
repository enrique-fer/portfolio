interface AchievementsListProps {
  achievements: string[];
}

export default function AchievementsList({ achievements }: AchievementsListProps) {
  if (achievements.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-700 mb-1.5">
        Key Achievements:
      </h4>
      <ul className="space-y-1.5">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-gray-600 text-xs flex gap-1.5"
          >
            <div className="flex items-start pt-0.5">
              <svg
                className="w-4 h-4 text-[#1872A0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="self-center">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
