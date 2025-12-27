interface CareerSummaryProps {
  totalYears: string;
  totalCompanies: number;
  totalProjects: string;
  coreCompetencies: string[];
}

export default function CareerSummary({
  totalYears,
  totalCompanies,
  totalProjects,
  coreCompetencies,
}: CareerSummaryProps) {
  return (
    <div className="mb-12 bg-white border-2 border-[#1872A0]/20 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Career Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Years */}
        <div className="text-center p-4 bg-[#1872A0]/5 rounded-xl">
          <div className="text-3xl font-bold text-[#1872A0] mb-1">
            {totalYears}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Years of Experience
          </div>
        </div>

        {/* Total Companies */}
        <div className="text-center p-4 bg-[#1872A0]/5 rounded-xl">
          <div className="text-3xl font-bold text-[#1872A0] mb-1">
            {totalCompanies}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Companies Worked
          </div>
        </div>

        {/* Total Projects */}
        <div className="text-center p-4 bg-[#1872A0]/5 rounded-xl">
          <div className="text-3xl font-bold text-[#1872A0] mb-1">
            {totalProjects}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Projects Completed
          </div>
        </div>
      </div>

      {/* Key Skills Summary */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 text-center">
          Core Competencies:
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {coreCompetencies.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1872A0] text-white rounded-lg text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
