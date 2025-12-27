export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  summary: string;
  technologies: string[];
  achievements: string[];
}

export interface CareerStats {
  totalYears: string;
  totalCompanies: number;
  totalProjects: string;
  coreCompetencies: string[];
}
