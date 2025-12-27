interface EducationAchievementsProps {
  achievements: string[];
}

export default function EducationAchievements({ achievements }: EducationAchievementsProps) {
  if (achievements.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-700 mb-1.5">
        Achievements:
      </h4>
      <ul className="space-y-0.5">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-gray-600 text-xs flex items-start gap-1.5"
          >
            <span className="text-[#1872A0] mt-0.5 text-sm">🎓</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
