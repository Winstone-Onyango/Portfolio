import { ScrollReveal } from "@/components/ScrollReveal";
import jkuatLogo from "@/assets/logos/jkuat.png";
import andelaLogo from "@/assets/logos/andela.png";
import plpLogo from "@/assets/logos/plp.png";
import jhubLogo from "@/assets/logos/jhub.png";
import gown from "@/assets/gown.jpg";

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
    <section id="education" className="section-padding bg-background relative scroll-mt-20">
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
            <ScrollReveal key={deg.degree} className="min-w-0">
              <div className="glass rounded-sm p-5 sm:p-6 h-full hover:border-primary/40 transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <img src={deg.logo} alt="" className="h-6 w-6 object-contain shrink-0" />
                  <span className="font-mono text-base sm:text-xl font-bold text-primary leading-snug break-words min-w-0">
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

        {/* Graduation photo — styled to rhyme with the hero portrait & project cards */}
        <ScrollReveal>
          <div className="flex justify-center mt-12">
            <div className="relative">
              <div className="w-64 sm:w-80 md:w-96 aspect-[3/4] overflow-hidden rounded-sm glass-strong">
                <img
                  src={gown}
                  alt="Graduation photo"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative elements — same as the hero portrait */}
              <div className="absolute -bottom-3 -right-3 w-64 sm:w-80 md:w-96 aspect-[3/4] border border-primary/30 rounded-sm -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/50" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
