import { ScrollReveal } from "@/components/ScrollReveal";
import jkuatLogo from "@/assets/logos/jkuat.png";
import andelaLogo from "@/assets/logos/andela.png";
import plpLogo from "@/assets/logos/plp.png";
import jhubLogo from "@/assets/logos/jhub.png";

const degrees = [
  {
    logo: jkuatLogo,
    degree: "B.Sc Telecommunication and Information Engineering",
    institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT) — Nairobi, Kenya",
    period: "SEP 2021 — MAY 2026",
    note: "Second Class Honors (Upper Division)",
    focus: [
      "Wireless Communication",
      "Signals & Communication",
      "Power Electronics",
      "Instrumentation and Control",
      "Data Communication",
      "Network Security & Cryptography",
      "Network Design & Management",
      "Digital Signal Processing",
      "Digital Image Processing",
      "Distributed Computing",
      "Software Engineering",
      "Database Management Systems",
    ],
  },
  {
    logo: andelaLogo,
    degree: "Kubernetes and Cloud Native Essentials",
    institution: "Andela & The Linux Foundation — Nairobi, Kenya",
    period: "FEB 2026 — APR 2026",
    focus: [
      "Pods & services",
      "Deployments & scaling",
      "Cloud native stack",
      "Linux tooling",
    ],
  },
  {
    logo: plpLogo,
    degree: "Software Development",
    institution: "Power Learn Project Academy (PLP) — Nairobi, Kenya",
    period: "FEB 2025 — NOV 2025",
    focus: [
      "Flutter App Development",
      "Web Development",
      "Database Management",
      "Python",
      "AI for Software Engineering",
    ],
  },
  {
    logo: jhubLogo,
    degree: "Artificial Intelligence and Machine Learning",
    institution: "Samsung Innovation Campus (SIC) & JHUB Africa — Nairobi, Kenya",
    period: "JUN 2026 — AUG 2026",
    focus: [
      "Generative AI",
      "Machine Learning",
      "Intellectual Property (IP)",
      "Responsible AI",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Academic background
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Education
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {degrees.map((deg) => (
            <ScrollReveal key={deg.degree}>
              <div className="glass rounded-sm p-6 h-full hover:border-primary/40 transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <img src={deg.logo} alt="" className="h-6 w-6 object-contain shrink-0" />
                  <span className="font-mono text-lg sm:text-xl font-bold text-primary leading-snug">
                    {deg.degree}
                  </span>
                  {deg.note && (
                    <span className="font-mono text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-sm border border-primary/20">
                      {deg.note}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {deg.institution}
                </p>
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {deg.period}
                </p>
                <div className="border-t border-border/50 pt-3">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-wider mb-2">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {deg.focus.map((f) => (
                      <span
                        key={f}
                        className="font-mono text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
