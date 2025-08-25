import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Leadership } from "@/data/leadership";

export function LeadershipEntry({ leadership }: { leadership: Leadership }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {leadership.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={leadership.imageUrl}
            alt={leadership.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {leadership.linkUrl ? (
            <a
              href={leadership.linkUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {leadership.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            leadership.title
          )}
        </h3>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {leadership.date}
        </p>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {leadership.description}
        </p>
      </div>
    </div>
  );
}
