import EducationDetails from "./EducationDetails";

interface DetailsPanelProps {
  field: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export default function DetailsPanel({
  field,
  description,
  courses,
  achievements,
}: DetailsPanelProps) {
  return (
    <EducationDetails
      field={field}
      description={description}
      courses={courses}
      achievements={achievements}
    />
  );
}
