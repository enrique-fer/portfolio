import { useState } from "react";
import TimelineLine from "./TimelineLine";
import TimelineDot from "./TimelineDot";
import EducationCard from "./EducationCard";
import DetailsPanel from "./DetailsPanel";
import { getTypeConfig } from "../../utils/educationTypeConfig";

interface EducationItemProps {
  type: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  courses: string[];
  achievements: string[];
  isLast: boolean;
  isLeft: boolean;
}

export default function EducationTimelineItem({
  type,
  institution,
  degree,
  field,
  duration,
  location,
  description,
  courses,
  achievements,
  isLast,
  isLeft,
}: EducationItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const colorConfig = getTypeConfig(type);

  return (
    <div className="relative pb-24">
      <TimelineLine isLast={isLast} />

      <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 px-6`}>
        <div className="flex-1"></div>
        
        <TimelineDot />

        <div className="flex-1 relative">
          <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
            <div className="relative">
              <EducationCard
                degree={degree}
                institution={institution}
                location={location}
                duration={duration}
                showDetails={showDetails}
                onClick={() => setShowDetails(!showDetails)}
                icon={colorConfig.icon}
                label={colorConfig.label}
                bgColor={colorConfig.bg}
                textColor={colorConfig.text}
                isLeft={isLeft}
              />
              {/* Details Panel - Absolutely positioned */}
              <div
                className={`absolute top-0 z-50 ${
                  isLeft ? 'left-full ml-6' : 'right-full mr-6'
                } transition-all duration-300 ease-in-out ${
                  showDetails ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <DetailsPanel
                  field={field}
                  description={description}
                  courses={courses}
                  achievements={achievements}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
