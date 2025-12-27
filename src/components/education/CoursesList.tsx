interface CoursesListProps {
  courses: string[];
}

export default function CoursesList({ courses }: CoursesListProps) {
  if (courses.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-700 mb-1.5">
        Key Courses:
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {courses.map((course, index) => (
          <span
            key={index}
            className="px-2.5 py-0.5 bg-[#1872A0]/10 text-[#1872A0] rounded-full text-xs font-medium"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
}
