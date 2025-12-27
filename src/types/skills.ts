export interface Skill {
  id: number;
  category: string;
  name: string;
  description: string;
  level: string;
  percentage: number;
}

export interface CategoryConfig {
  title: string;
  icon: string;
  color: string;
}

export type SkillCategory = "technical" | "hard" | "soft";
