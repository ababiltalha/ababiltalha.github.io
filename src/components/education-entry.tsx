import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  const hasCgpa = Array.isArray(education.cgpa) && education.cgpa.length > 0;
  const hasGpa = Array.isArray(education.gpa) && education.gpa.length > 0;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {education.logoUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={education.logoUrl}
            alt={`${education.institution} logo`}
            width={160}
            height={200}
            className="rounded-lg object-contain"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-base font-serif">{education.institution}</h3>
        <div className="text-xs text-zinc-500 mt-1">{education.year}</div>
        <div className="mt-2 space-y-2">
          {education.degree.map((degree, index) => (
            <div key={`${degree}-${index}`} className="text-sm text-zinc-600 leading-relaxed">
              <p>{degree}</p>
              {hasCgpa && education.cgpa?.[index] && (
                <p className="mt-1 italic">CGPA: {education.cgpa[index]}</p>
              )}
              {hasGpa && education.gpa?.[index] && (
                <p className="mt-1 italic">GPA: {education.gpa[index]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
