"use client";

import { Section } from "@/data/section-order";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  sections: Section[];
}

export function Navbar({ sections }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

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
      case Section.Leadership:
        return "Leadership";
      default:
        return section;
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-[#FFFCF8] dark:bg-zinc-900 py-4 mb-12 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
        <div className="flex flex-wrap gap-8 mb-4 sm:mb-0">
          <button
            onClick={scrollToTop}
            className="font-serif text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 underline decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-600 dark:hover:decoration-zinc-400 underline-offset-4 focus:outline-none focus:ring-0 active:bg-transparent"
          >
            About
          </button>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-serif text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 underline decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-600 dark:hover:decoration-zinc-400 underline-offset-4 focus:outline-none focus:ring-0 active:bg-transparent"
            >
              {getSectionDisplayName(section)}
            </button>
          ))}
        </div>
        
        {/* Dark Mode Switch */}
        <button
          onClick={toggleTheme}
          className="self-end flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? (
            <svg className="w-3 h-3 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-3 h-3 text-zinc-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
} 