export interface EducationStats {
  totalEntries: number;
  totalCourses: number;
  totalCertifications: number;
  totalAchievements: number;
  educationTypes: {
    degrees: number;
    courses: number;
    schools: number;
    certifications: number;
  };
}

interface StatItemProps {
  value: number;
  label: string;
  color: string;
  icon: string;
}

function StatItem({ value, label, color, icon }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

interface EducationSummaryProps {
  stats: EducationStats;
}

export default function EducationSummary({ stats }: EducationSummaryProps) {
  return (
    <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-wrap justify-center gap-8">
        <StatItem
          value={stats.totalEntries}
          label="Total Entries"
          color="text-[#1872A0]"
          icon="📚"
        />
        <StatItem
          value={stats.educationTypes.degrees}
          label="Degrees"
          color="text-purple-600"
          icon="🎓"
        />
        <StatItem
          value={stats.educationTypes.courses}
          label="Courses"
          color="text-blue-600"
          icon="📖"
        />
        <StatItem
          value={stats.totalCertifications}
          label="Certifications"
          color="text-cyan-600"
          icon="📜"
        />
        <StatItem
          value={stats.totalAchievements}
          label="Achievements"
          color="text-orange-600"
          icon="🏆"
        />
      </div>
    </div>
  );
}
