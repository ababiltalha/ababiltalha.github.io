import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { ResearchProjectsEntry } from "@/components/research-projects-entry";
import { researchProjectsData } from "@/data/research-projects";
import { sectionOrder, Section } from "@/data/section-order";
import { Navbar } from "@/components/navbar";
import { LeadershipEntry } from "@/components/leadership-entry";
import { leadershipData } from "@/data/leadership";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-zinc-900 transition-colors duration-200">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* Navbar */}
            <Navbar sections={sectionOrder} />
            
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                  About Me
                </h2>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Publications
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Professional Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Projects
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.ResearchProjects:
                  return (
                    researchProjectsData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Research Experience
                        </h2>
                        <div className="space-y-12">
                          {researchProjectsData.map((researchProjects, index) => (
                            <ResearchProjectsEntry key={index} researchProjects={researchProjects} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Leadership:
                  return (
                    leadershipData.length > 0 && (
                      <section key={sectionName} id={sectionName} className="scroll-mt-28">
                        <h2 className="font-serif font-bold text-xl mb-12 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Leadership Roles
                        </h2>
                        <div className="space-y-12">
                          {leadershipData.map((leadership, index) => (
                            <LeadershipEntry key={index} leadership={leadership} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
