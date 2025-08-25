"use client";

import { Section } from "@/data/section-order";

interface NavbarProps {
  sections: Section[];
}

export function Navbar({ sections }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSectionDisplayName = (section: Section): string => {
    switch (section) {
      case Section.Education:
        return "Education";
      case Section.Experience:
        return "Experience";
      case Section.Portfolio:
        return "Projects";
      case Section.ResearchProjects:
        return "Research";
      case Section.Publication:
        return "Publications";
      case Section.News:
        return "News";
      default:
        return section;
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-[#FFFCF8] py-4 mb-12">
      <div className="flex flex-wrap gap-8 text-sm">
        <button
          onClick={scrollToTop}
          className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-200 underline decoration-zinc-300 hover:decoration-zinc-600 underline-offset-4 focus:outline-none focus:ring-0 active:bg-transparent"
        >
          About
        </button>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-200 underline decoration-zinc-300 hover:decoration-zinc-600 underline-offset-4 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            {getSectionDisplayName(section)}
          </button>
        ))}
      </div>
    </nav>
  );
} 