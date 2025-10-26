import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ResearchProjects } from "@/data/research-projects";

export function ResearchProjectsEntry({ researchProjects }: { researchProjects: ResearchProjects }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {researchProjects.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={researchProjects.imageUrl}
            alt={researchProjects.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {researchProjects.projectUrl ? (
            <a
              href={researchProjects.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300 underline underline-offset-4"
            >
              {researchProjects.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            researchProjects.title
          )}
        </h3>

        {researchProjects.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {researchProjects.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 dark:text-zinc-300 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {researchProjects.paperUrl && (
            <a
              href={researchProjects.paperUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Paper</span>
            </a>
          )}
          {researchProjects.projectUrl && (
            <a
              href={researchProjects.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {researchProjects.codeUrl && (
            <a
              href={researchProjects.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>

        {researchProjects.supervisors && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Supervisors: {researchProjects.supervisors.map((supervisor, index) => (
              <span key={index}>
                <a href={researchProjects.supervisorLinks?.[index]} className="hover:text-zinc-600 hover:underline transition-colors underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                  {supervisor}
                </a>
                {index < (researchProjects.supervisors?.length ?? 0) - 1 && ", "}
              </span>
            ))}
          </p>
        )}

        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {researchProjects.description}
        </p>
      </div>
    </div>
  );
}
