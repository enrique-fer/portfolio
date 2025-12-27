import EducationHeader from "./EducationHeader";
import TypeBadge from "./TypeBadge";

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  showDetails: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  bgColor: string;
  textColor: string;
  isLeft: boolean;
}

export default function EducationCard({
  degree,
  institution,
  location,
  duration,
  showDetails,
  onClick,
  icon,
  label,
  bgColor,
  textColor,
  isLeft,
}: EducationCardProps) {
  return (
    <div
      className="relative min-w-60 h-fit flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-[#1872A0]/30"
      onClick={onClick}
    >
      <TypeBadge 
        icon={icon} 
        label={label} 
        bgColor={bgColor} 
        textColor={textColor} 
      />
      
      <EducationHeader
        degree={degree}
        institution={institution}
        location={location}
        duration={duration}
        showDetails={showDetails}
        isLeft={isLeft}
      />
    </div>
  );
}
