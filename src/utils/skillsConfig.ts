import type { CategoryConfig } from "../types/skills";

/**
 * Maps skill level to corresponding Tailwind CSS classes
 */
export function getLevelColor(level: string): string {
  switch (level.toLowerCase()) {
    case "expert":
      return "text-green-700 bg-green-100 border border-green-300";
    case "advanced":
      return "text-blue-700 bg-blue-100 border border-blue-300";
    case "intermediate":
      return "text-yellow-700 bg-yellow-100 border border-yellow-300";
    case "beginner":
      return "text-orange-700 bg-orange-100 border border-orange-300";
    default:
      return "text-gray-700 bg-gray-100 border border-gray-300";
  }
}

/**
 * Configuration for skill categories including title, icon, and color
 */
export const categoryConfig: Record<string, CategoryConfig> = {
  technical: {
    title: "Technical Skills",
    icon: "💻",
    color: "text-purple-600",
  },
  hard: {
    title: "Hard Skills",
    icon: "🛠️",
    color: "text-blue-600",
  },
  soft: {
    title: "Soft Skills",
    icon: "🤝",
    color: "text-green-600",
  },
};
