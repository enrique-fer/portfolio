import NavigationHeader from "../components/nav-header";
import EducationTimelineItem from "../components/education/EducationTimelineItem";
import educationData from "../assets/data/education-data.json";
import type { EducationData } from "../types/education";

export default function EducationPage() {
  const education: EducationData[] = educationData;

  return (
    <>
      <NavigationHeader />
      
      <div className="min-h-[100vh] py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Academic <span className="text-[#1872A0]">Background</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My educational journey through various institutions, courses, and academic achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {education.map((edu, index) => (
              <EducationTimelineItem
                key={edu.id}
                type={edu.type}
                institution={edu.institution}
                degree={edu.degree}
                field={edu.field}
                duration={edu.duration}
                location={edu.location}
                grade={edu.grade}
                description={edu.description}
                courses={edu.courses}
                achievements={edu.achievements}
                isLast={index === education.length - 1}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

