import NavigationHeader from "../components/nav-header";
import TimelineItem from "../components/experience/TimelineItem";
import CareerSummary from "../components/experience/CareerSummary";
import experienceData from "../assets/data/experience-data.json";
import careerStatsData from "../assets/data/career-stats.json";
import type { Experience, CareerStats } from "../types/experience";

export default function ExperiencePage() {
  const experiences: Experience[] = experienceData;

  // Load career summary stats
  const careerStats: CareerStats = {
    ...careerStatsData,
    totalCompanies: experiences.length,
  };

  return (
    <>
      <NavigationHeader />
      
      <div className="min-h-screen py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Professional <span className="text-[#1872A0]">Experience</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey through various roles and companies, showcasing growth and achievements
            </p>
          </div>

          {/* Career Summary */}
          <CareerSummary
            totalYears={careerStats.totalYears}
            totalCompanies={careerStats.totalCompanies}
            totalProjects={careerStats.totalProjects}
            coreCompetencies={careerStats.coreCompetencies}
          />

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp) => (
              <TimelineItem
                key={exp.id}
                company={exp.company}
                position={exp.position}
                duration={exp.duration}
                location={exp.location}
                description={exp.description}
                summary={exp.summary}
                technologies={exp.technologies}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}