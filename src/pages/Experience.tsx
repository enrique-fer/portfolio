import NavigationHeader from "../components/nav-header";
import TimelineItem from "../components/TimelineItem";
import CareerSummary from "../components/CareerSummary";
import experienceData from "../assets/data/experience-data.json";

interface Experience {
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

export default function Experience() {
  const experiences: Experience[] = experienceData;

  // Calculate career summary stats
  const careerStats = {
    totalYears: "5+",
    totalCompanies: experiences.length,
    totalProjects: "20+",
    keySkills: [
      "Full Stack Development",
      "Team Leadership",
      "System Architecture",
      "Agile Methodology",
      "CI/CD",
    ],
  };

  return (
    <>
      <NavigationHeader />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-6 sm:px-8 lg:px-12">
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
            keySkills={careerStats.keySkills}
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