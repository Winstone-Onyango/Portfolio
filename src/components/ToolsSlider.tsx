import { toolCategories } from "@/data/tools";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ToolsSlider() {
  const allTools = toolCategories.flatMap((cat) =>
    cat.tools.map((tool) => ({ ...tool, category: cat.category }))
  );

  const doubled = [...allTools, ...allTools];

  return (
    <section id="tools" className="section-padding bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="section-container mb-12 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">Skills</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
           What I work with
          </h2>
        </ScrollReveal>
      </div>

      <div className="overflow-hidden relative z-10">
        <div className="animate-marquee flex gap-4 w-max">
          {doubled.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex-shrink-0 glass rounded-sm px-5 py-4 w-60 hover:border-primary/40 transition-colors"
            >
              <p className="font-mono text-[10px] text-primary/70 uppercase tracking-wider mb-1">
                {tool.category}
              </p>
              <p className="font-semibold text-foreground text-sm">
                {tool.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {tool.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
