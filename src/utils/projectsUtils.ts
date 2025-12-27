import type { Project } from "../types/project";
import type { ProjectStats } from "../components/projects/ProjectsSummary";

/**
 * Calculates project statistics from an array of projects
 */
export function calculateProjectStats(projects: Project[]): ProjectStats {
  return {
    totalProjects: projects.length,
    totalTechnologies: new Set(projects.flatMap((p) => p.technologies)).size,
    companyProjects: projects.filter((p) => p.company).length,
  };
}
