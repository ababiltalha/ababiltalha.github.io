import Image from "next/image";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {experience.logoUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            width={160}
            height={200}
            className="rounded-lg object-contain"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-base font-serif">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        <div className="text-xs text-zinc-500 mt-1">
          <div>{experience.date}</div>
          {experience.location && <div>{experience.location}</div>}
        </div>
        {experience.advisor && (
          <p className="text-sm text-zinc-500 mt-2 italic">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-500 mt-2 italic">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-500 mt-2 italic">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
