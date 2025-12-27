export interface EducationData {
  id: number;
  type: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export interface TypeConfig {
  bg: string;
  text: string;
  label: string;
  icon: string;
}
