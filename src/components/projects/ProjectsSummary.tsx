export interface ProjectStats {
  totalProjects: number;
  totalTechnologies: number;
  companyProjects: number;
}

interface StatItemProps {
  value: number;
  label: string;
  color: string;
}

function StatItem({ value, label, color }: StatItemProps) {
  return (
    <div className="text-center">
      <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

interface ProjectsSummaryProps {
  stats: ProjectStats;
}

export default function ProjectsSummary({ stats }: ProjectsSummaryProps) {
  return (
    <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-wrap justify-center gap-8">
        <StatItem
          value={stats.totalProjects}
          label="Total Projects"
          color="text-[#1872A0]"
        />
        <StatItem
          value={stats.totalTechnologies}
          label="Technologies"
          color="text-purple-600"
        />
        {/* <StatItem
          value={stats.companyProjects}
          label="Company Projects"
          color="text-green-600"
        /> */}
      </div>
    </div>
  );
}
