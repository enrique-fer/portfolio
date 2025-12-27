import type { EducationData } from "../types/education";
import type { EducationStats } from "../components/education/EducationSummary";

/**
 * Calculates education statistics from an array of education entries
 */
export function calculateEducationStats(education: EducationData[]): EducationStats {
  const typeCount = education.reduce(
    (acc, edu) => {
      const type = edu.type.toLowerCase();
      if (type === "degree") acc.degrees++;
      else if (type === "course") acc.courses++;
      else if (type === "school") acc.schools++;
      else if (type === "certification") acc.certifications++;
      return acc;
    },
    { degrees: 0, courses: 0, schools: 0, certifications: 0 }
  );

  return {
    totalEntries: education.length,
    totalCourses: education.reduce((sum, edu) => sum + edu.courses.length, 0),
    totalCertifications: typeCount.certifications,
    totalAchievements: education.reduce((sum, edu) => sum + edu.achievements.length, 0),
    educationTypes: typeCount,
  };
}
