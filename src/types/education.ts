export interface EducationData {
  id: number;
  type: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  link?: { ref: string; img?: string; alt?: string };
  courses: string[];
  achievements: string[];
}

export interface TypeConfig {
  bg: string;
  text: string;
  label: string;
  icon: string;
}
