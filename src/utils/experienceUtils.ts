/**
 * Calculates years of experience from a starting date to now
 * @param startDate - The date when experience started (format: YYYY-MM-DD or Date object)
 * @returns Formatted string with years of experience (e.g., "2.5+")
 */
export function calculateYearsOfExperience(startDate: string | Date): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const now = new Date();
  
  const diffMs = now.getTime() - start.getTime();
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // Round to one decimal place
  const years = Math.floor(diffYears * 10) / 10;
  
  return `${years}+`;
}

/**
 * Counts unique companies from experience data
 * @param experiences - Array of experience entries
 * @returns Number of unique companies
 */
export function countUniqueCompanies(experiences: Array<{ company: string }>): number {
  const uniqueCompanies = new Set(experiences.map(exp => exp.company));
  return uniqueCompanies.size;
}
