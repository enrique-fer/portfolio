export interface TypeConfig {
  bg: string;
  text: string;
  label: string;
  icon: string;
}

const typeColors: Record<string, TypeConfig> = {
  degree: {
    bg: "bg-purple-300",
    text: "text-purple-900",
    label: "Degree",
    icon: "🎓",
  },
  course: {
    bg: "bg-blue-300",
    text: "text-blue-900",
    label: "Course",
    icon: "📚",
  },
  school: {
    bg: "bg-green-300",
    text: "text-green-900",
    label: "School",
    icon: "🏫",
  },
  certification: {
    bg: "bg-orange-300",
    text: "text-orange-900",
    label: "Certification",
    icon: "📜",
  },
};

export function getTypeConfig(type: string): TypeConfig {
  return typeColors[type] || typeColors.degree;
}
