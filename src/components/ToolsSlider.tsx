import { toolCategories } from "@/data/tools";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ToolsSlider() {
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

      <div className="section-container relative z-10 space-y-16">
        {toolCategories.map((category, index) => {
          const doubled = [...category.tools, ...category.tools];
          const isReverse = index % 2 === 1;

          return (
            <ScrollReveal key={category.category}>
              <div>
                <h3 className="font-mono text-xs md:text-sm tracking-widest text-primary uppercase mb-4">
                  {category.category}
                </h3>
                <div className="overflow-hidden relative">
                  <div className={`flex gap-4 w-max ${isReverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                    {doubled.map((tool, i) => (
                      <div
                        key={`${tool.name}-${i}`}
                        className="flex-shrink-0 glass rounded-sm px-5 py-4 w-60 hover:border-primary/40 transition-colors"
                      >
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
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
