import { useState } from "react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDetail } from "./ProjectDetail";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { projectAssets } from "@/data/projectAssets";

const ITEMS_PER_PAGE = 3;

export function ProjectsGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [page, setPage] = useState(0);
  const [researchPage, setResearchPage] = useState(0);

  const professional = projects.filter((p) => p.category === "professional");
  const research = projects.filter((p) => p.category === "research");
  const researchTotalPages = Math.ceil(research.length / ITEMS_PER_PAGE);
  const researchPaged = research.slice(
    researchPage * ITEMS_PER_PAGE,
    (researchPage + 1) * ITEMS_PER_PAGE
  );

  const types = ["all", ...new Set(professional.map((p) => p.type))];

  const filtered =
    filter === "all"
      ? professional
      : professional.filter((p) => p.type === filter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const selected = projects.find((p) => p.id === selectedId);

  const handleFilterChange = (type: string) => {
    setFilter(type);
    setPage(0);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Portfolio
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Selected work
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`px-4 py-1.5 text-sm font-medium rounded-sm border transition-all ${
                  filter === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "glass text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {type === "all" ? "All Projects" : type}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Paginated project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:min-h-[420px]">
          {paged.map((project) => (
            <div
              key={project.id}
              className="glass rounded-sm overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)] transition-all group h-full flex flex-col animate-fade-in"
            >
              <div className="h-52 relative overflow-hidden bg-muted">
                {projectAssets[project.id]?.featured ? (
                  <img
                    src={projectAssets[project.id].featured}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-card" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                {/* Corner brackets */}
                <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-primary/70" />
                <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-primary/70" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-primary/70" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-primary/70" />
                <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-widest text-primary uppercase z-10">
                  {project.type}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className="rounded-sm text-xs font-mono border-primary/30 text-primary"
                  >
                    {project.type}
                  </Badge>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-primary/80 mb-3">
                  {project.role}
                </p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 text-[6px]">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-sm"
                  onClick={() => setSelectedId(project.id)}
                >
                  View Project Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-16">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-sm border-border hover:border-primary hover:text-primary disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-8 rounded-sm text-sm font-mono transition-all ${
                    i === page
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="rounded-sm border-border hover:border-primary hover:text-primary disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Research section — rendered only when research projects exist */}
        {research.length > 0 && (
        <>
        {/* Divider */}
        <div className="glow-line mb-16" />

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Research & Academic
            </p>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Research Projects
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:min-h-[420px]">
          {researchPaged.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <div className="glass rounded-sm overflow-hidden hover:border-primary/40 transition-all group">
                {projectAssets[project.id]?.featured && (
                  <div className="h-40 relative overflow-hidden bg-muted">
                    <img
                      src={projectAssets[project.id].featured}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
                  </div>
                )}
                <div className="p-5">
                <Badge
                  variant="outline"
                  className="rounded-sm text-xs font-mono mb-3 border-primary/30 text-primary"
                >
                  {project.type}
                </Badge>
                <h4 className="font-bold text-foreground mb-2">{project.name}</h4>
                <p className="text-xs font-mono text-primary/80 mb-3">
                  {project.role}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 text-[6px]">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 rounded-sm"
                  onClick={() => setSelectedId(project.id)}
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
        )}

        {researchTotalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setResearchPage((p) => Math.max(0, p - 1))}
              disabled={researchPage === 0}
              className="rounded-sm border-border hover:border-primary hover:text-primary disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: researchTotalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setResearchPage(i)}
                  className={`w-8 h-8 rounded-sm text-sm font-mono transition-all ${
                    i === researchPage
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setResearchPage((p) => Math.min(researchTotalPages - 1, p + 1))
              }
              disabled={researchPage === researchTotalPages - 1}
              className="rounded-sm border-border hover:border-primary hover:text-primary disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {selected && (
        <ProjectDetail
          project={selected}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  );
}
