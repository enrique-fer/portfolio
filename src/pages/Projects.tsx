import NavigationHeader from "../components/nav-header";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsSummary from "../components/projects/ProjectsSummary";
import ProjectCard from "../components/projects/ProjectCard";
import projectsData from "../assets/data/projects-data.json";
import { calculateProjectStats } from "../utils/projectsUtils";
import type { Project } from "../types/project";

export default function ProjectsPage() {
  const projects: Project[] = projectsData;
  const stats = calculateProjectStats(projects);

  return (
    <>
      <NavigationHeader />

      <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ProjectsHeader />
          <ProjectsSummary stats={stats} />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
