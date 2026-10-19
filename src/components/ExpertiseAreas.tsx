import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronRight, ChevronDown, MapPin, Briefcase } from "lucide-react";
import kplcLogo from "@/assets/logos/kplc.png";
import shofcoLogo from "@/assets/logos/shofco.jpg";
import kcbLogo from "@/assets/logos/kcb.png";
import jkuatLogo from "@/assets/logos/jkuat.png";

const areas = [
  {
    logo: kplcLogo,
    short: "KPLC",
    title: "Kenya Power & Lighting Company (KPLC)",
    role: "Telecommunication Engineer Intern",
    type: "Internship",
    description:
      "Telecommunication Engineer Intern.",
    bullets: [
      "Implemented and maintained SCADA systems and real-time monitoring tools with senior engineers and technicians",
      "Substation site visits for maintenance and fault troubleshooting on telecom and network infrastructure",
      "Exposure to networked monitoring systems and data communication protocols",
    ],
  },
  {
    logo: shofcoLogo,
    short: "SHOFCO",
    title: "Shining Hope for Communities (SHOFCO)",
    role: "IT & Tech Support Intern",
    type: "Internship",
    description:
      "IT & Tech Support Intern.",
    bullets: [
      "Installed and configured operating systems, productivity software, and antivirus tools across Shofco Mathare School for Girls and Clinic",
      "Configured internet connectivity and network devices; diagnosed hardware/software issues for staff",
      "First-level support for the SHA healthcare system and general end users",
    ],
  },
  {
    logo: kcbLogo,
    short: "KCB Bank",
    title: "KCB Bank Limited",
    role: "Intern Engineer",
    type: "Internship",
    description:
      "Intern Engineer.",
    bullets: [
      "Provided technical support for digital banking services, including ATM transactions and mobile and Internet banking applications.",
      "Assisted customers with internet and mobile banking registration, troubleshooting, and usage guidance, strengthening client-facing communication skills.",
    ],
  },
  {
    logo: jkuatLogo,
    short: "JKUAT ICT",
    title: "JKUAT ICT Department",
    role: "ICT & Systems Engineer Attaché",
    type: "Attachment",
    description:
      "ICT & Systems Engineer Attaché.",
    bullets: [
      "Supported technical staff in troubleshooting and maintaining laboratory computers and infrastructure.",
      "Installed and configured software applications across university lab systems.",
    ],
  },
];

export function ExpertiseAreas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = areas[activeIndex];

  return (
    <section id="expertise" className="section-padding relative scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Experience
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Work history
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {areas.length} internships across power, community tech, banking and campus ICT — tap a role to see what I did there.
          </p>
        </ScrollReveal>

        {/* ---------- MOBILE: stacked accordion (best for phones) ---------- */}
        <div className="lg:hidden space-y-3">
          {areas.map((area, i) => {
            const isActive = i === activeIndex;
            return (
              <ScrollReveal key={area.title} className="lg:hidden">
              <div
                className={`rounded-sm border overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "glass-strong border-primary/50 shadow-lg shadow-primary/5"
                    : "glass border-border/60"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  aria-expanded={isActive}
                  className="w-full flex items-center gap-3 p-4 text-left min-h-[72px]"
                >
                  <span className="font-mono text-[11px] text-primary/70 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-11 h-11 rounded-sm bg-background/60 border border-border/60 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={area.logo}
                      alt={`${area.short} logo`}
                      className={`h-8 w-8 object-contain ${isActive ? "" : "grayscale opacity-70"}`}
                      loading="lazy"
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-[15px] leading-tight text-foreground">
                      {area.short}
                    </span>
                    <span className="mt-1 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5">
                        <Briefcase className="h-3 w-3" />
                        {area.type}
                      </span>
                      <span className="text-xs text-muted-foreground truncate">
                        {area.role}
                      </span>
                    </span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isActive ? "bg-primary text-primary-foreground border-primary rotate-180" : "border-border text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 pt-1 border-t border-border/50 mt-1">
                      <p className="pt-3 text-sm font-medium text-foreground leading-snug">
                        {area.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                        {area.role} — {area.description}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {area.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 bg-background/40 border border-border/40 rounded-sm p-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-[13.5px] leading-relaxed text-foreground/85">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                        {areas.map((_, dot) => (
                          <span
                            key={dot}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              dot === i ? "w-6 bg-primary" : "w-2 bg-border"
                            }`}
                          />
                        ))}
                        <span className="ml-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                          {i + 1} / {areas.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="hidden lg:block">
          <div className="grid lg:grid-cols-[320px_1fr] gap-6 sm:gap-8">
            {/* Left: Tab navigation — desktop only (mobile uses accordion above) */}
            <div className="flex flex-col gap-2">
              {areas.map((area, i) => (
                <button
                  key={area.title}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 p-4 rounded-sm text-left transition-all border ${
                    i === activeIndex
                      ? "glass-strong border-primary/50 shadow-lg shadow-primary/5"
                      : "border-transparent hover:glass hover:border-border/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                      i === activeIndex
                        ? "bg-primary/20"
                        : "bg-muted"
                    }`}
                  >
                    <img
                      src={area.logo}
                      alt=""
                      className={`h-5 w-5 object-contain transition-all ${
                        i === activeIndex ? "" : "grayscale opacity-60"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-semibold text-sm transition-colors ${
                        i === activeIndex ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {area.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{area.role}</p>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-all ${
                      i === activeIndex
                        ? "text-primary opacity-100"
                        : "text-muted-foreground/30 opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right: Detail panel */}
            <div className="glass-strong rounded-sm p-8 md:p-10 relative overflow-hidden animate-fade-in" key={activeIndex}>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/20 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <img src={active.logo} alt="" className="h-8 w-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-2xl">
                    {active.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{active.role} · {active.type}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                {active.description}
              </p>

              <div className="glow-line mb-8" />

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {active.bullets.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
