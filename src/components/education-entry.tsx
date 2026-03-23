import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  const hasCgpa = Array.isArray(education.cgpa) && education.cgpa.length > 0;
  const hasGpa = Array.isArray(education.gpa) && education.gpa.length > 0;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {education.logoUrl && (
        <div className="w-1/4 min-w-[80px] relative flex justify-center">
          <div className="h-20 w-20 rounded-xl overflow-hidden">
            <Image
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-base font-serif">{education.institution}</h3>
        <div className="text-xs text-zinc-500 mt-1">{education.year}</div>
        <div className="mt-2 space-y-2">
          {education.degree.map((degree, index) => (
            <div key={`${degree}-${index}`} className="text-sm text-zinc-600 leading-relaxed">
              <p>{degree}<br />
                {hasCgpa && education.cgpa?.[index] && (
                  <span>CGPA: {education.cgpa[index]}</span>
                )}
                {hasGpa && education.gpa?.[index] && (
                  <span>GPA: {education.gpa[index]}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
