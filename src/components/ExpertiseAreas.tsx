import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";
import kplcLogo from "@/assets/logos/kplc.png";
import shofcoLogo from "@/assets/logos/shofco.jpg";
import kcbLogo from "@/assets/logos/kcb.png";
import jkuatLogo from "@/assets/logos/jkuat.png";

const areas = [
  {
    logo: kplcLogo,
    title: "Kenya Power & Lighting Company (KPLC)",
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
    title: "Shining Hope for Communities (SHOFCO)",
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
    title: "KCB Bank Limited",
    description:
      "Intern Engineer.",
    bullets: [
      "Provided technical support for digital banking services, including ATM transactions and mobile and Internet banking applications.",
      "Assisted customers with internet and mobile banking registration, troubleshooting, and usage guidance, strengthening client-facing communication skills.",
    ],
  },
  {
    logo: jkuatLogo,
    title: "JKUAT ICT Department",
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Work history
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-[320px_1fr] gap-6 sm:gap-8">
            {/* Left: Tab navigation — horizontal scroll on phones, column on desktop */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 lg:pb-0">
              {areas.map((area, i) => (
                <button
                  key={area.title}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm text-left transition-all border shrink-0 lg:shrink min-w-[220px] sm:min-w-0 ${
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
            <div className="glass-strong rounded-sm p-5 sm:p-8 md:p-10 relative overflow-hidden animate-fade-in" key={activeIndex}>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/20 pointer-events-none" />

              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <img src={active.logo} alt="" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl sm:text-2xl">
                    {active.title}
                  </h3>
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
