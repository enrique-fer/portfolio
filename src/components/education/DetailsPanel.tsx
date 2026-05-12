import type { EducationData } from "../../types/education";
import EducationDetails from "./EducationDetails";

interface DetailsPanelProps {
  field: string;
  description: string;
  link?: EducationData["link"];
  courses: string[];
  achievements: string[];
}

export default function DetailsPanel({
  field,
  description,
  link,
  courses,
  achievements,
}: DetailsPanelProps) {
  return (
    <EducationDetails
      field={field}
      description={description}
      link={link}
      courses={courses}
      achievements={achievements}
    />
  );
}
