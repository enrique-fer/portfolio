import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Project Header */}
      <div className="h-32 bg-gradient-to-br from-[#1872A0] to-[#155d85] flex items-center justify-center">
        <svg
          className="w-20 h-20 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>

      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {project.title}
          </h3>
          {project.company && (
            <p className="text-sm text-[#1872A0] font-medium">{project.company}</p>
          )}
          <p className="text-sm text-gray-500">{project.duration}</p>
        </div>

        {/* Goal */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Project Goal</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{project.goal}</p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-br from-[#1872A0]/10 to-[#1872A0]/5 text-[#1872A0] text-xs font-medium rounded-full border border-[#1872A0]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities</h4>
          <ul className="space-y-1">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-gray-600 flex gap-2">
                <span className="text-[#1872A0] pt-0.5">•</span>
                <span className="flex-1 self-center">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
