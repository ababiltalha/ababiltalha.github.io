import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>
          {education.cgpa && (
            <p className="text-sm text-zinc-600 leading-relaxed mt-2">
              CGPA: {education.cgpa}
            </p>
          )}
          {education.notableCourses && (
            <p className="text-sm text-zinc-600 leading-relaxed mt-2">
              Notable Courses: {education.notableCourses}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
