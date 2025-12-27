interface SkillsOverviewProps {
  totalSkills: number;
  technicalCount: number;
  hardCount: number;
  softCount: number;
  expertCount: number;
  advancedCount: number;
}

export default function SkillsOverview({
  totalSkills,
  technicalCount,
  hardCount,
  softCount,
  expertCount,
  advancedCount,
}: SkillsOverviewProps) {
  return (
    <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Skills <span className="text-[#1872A0]">Overview</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Total Skills */}
        <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <div className="text-3xl font-bold text-[#1872A0] mb-1">{totalSkills}</div>
          <div className="text-sm text-gray-600 font-medium">Total Skills</div>
        </div>

        {/* Technical Skills */}
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 mb-1">{technicalCount}</div>
          <div className="text-sm text-gray-600 font-medium">💻 Technical</div>
        </div>

        {/* Hard Skills */}
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 mb-1">{hardCount}</div>
          <div className="text-sm text-gray-600 font-medium">🛠️ Hard Skills</div>
        </div>

        {/* Soft Skills */}
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-1">{softCount}</div>
          <div className="text-sm text-gray-600 font-medium">🤝 Soft Skills</div>
        </div>

        {/* Expert Level */}
        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
          <div className="text-3xl font-bold text-emerald-600 mb-1">{expertCount}</div>
          <div className="text-sm text-gray-600 font-medium">🏆 Expert</div>
        </div>

        {/* Advanced Level */}
        <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl">
          <div className="text-3xl font-bold text-cyan-600 mb-1">{advancedCount}</div>
          <div className="text-sm text-gray-600 font-medium">⭐ Advanced</div>
        </div>
      </div>
    </div>
  );
}
