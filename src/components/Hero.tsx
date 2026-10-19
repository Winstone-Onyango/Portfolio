import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";
import { toolCategories } from "@/data/tools";

const ROLES = [
  "Telecommunication and Information Engineer",
  "AI/ML Engineer",
  "Network Design and Management",
  "Robotics IoT & Automation",
  "Software Developer",
  "Electrical & Embedded Systems",
];

/**
 * Hero stat counter: ALWAYS counting — loops 0 -> target -> 0 -> target …
 * Uses easing + per-counter stagger so Internships and Technologies feel alive
 * together without ever sitting still.
 */
function CountingNumber({
  target,
  durationMs = 2000,
  holdMs = 1400,
  suffix = "+",
}: {
  target: number;
  durationMs?: number;
  holdMs?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    let timeout = 0;
    let cancelled = false;

    const easeInOut = (p: number) =>
      p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

    const countUp = () => {
      if (cancelled) return;
      const t0 = performance.now();
      const tick = (t: number) => {
        if (cancelled) return;
        const p = Math.min(1, (t - t0) / durationMs);
        setValue(Math.round(easeInOut(p) * target));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setValue(target);
          // hold at the top, then count back down and loop
          timeout = window.setTimeout(countDown, holdMs);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const countDown = () => {
      if (cancelled) return;
      const t0 = performance.now();
      const from = target;
      const tick = (t: number) => {
        if (cancelled) return;
        const p = Math.min(1, (t - t0) / durationMs);
        setValue(Math.round(from * (1 - easeInOut(p))));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setValue(0);
          timeout = window.setTimeout(countUp, 400);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    let observer: IntersectionObserver | null = null;
    const node = ref.current;
    // Small stagger by target so the two numbers don't move in perfect lockstep
    const startDelay = (target % 5) * 160;
    const start = () => {
      timeout = window.setTimeout(countUp, startDelay);
    };

    if (node && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            start();
            observer?.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(node);
    } else {
      start();
    }
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      observer?.disconnect();
    };
  }, [target, durationMs, holdMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: number;
    if (!deleting && charIndex < current.length) {
      timeout = window.setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = window.setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = window.setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const typedRole = ROLES[roleIndex].slice(0, charIndex);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image — kept visible: lighter scrims, stronger on the left where text sits */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
        />
        {/* Mobile: dark enough for text to stay readable, photo still peeks through */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/95 sm:hidden" />
        {/* Desktop: readable on the left, photo breathes on the right */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-background via-background/80 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" />
        {/* Extra readability veil on mobile only — keeps the photo visible but dims hot spots behind text */}
        <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px] sm:hidden pointer-events-none" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-15 sm:opacity-30" />

      <div className="section-container relative z-10 pt-24 pb-16 sm:pt-24 sm:pb-0 w-full">
        <div className="grid gap-10 sm:gap-12 items-center lg:grid-cols-5">
          <div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="inline-flex flex-wrap items-center gap-2 max-w-full px-3 py-1.5 glass rounded-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-mono text-[9px] sm:text-xs tracking-[0.08em] sm:tracking-widest text-primary uppercase">
                TELECOMMUNICATION & INFORMATION ENGINEER
              </span>
            </div>

            <h1 className="text-[2rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-[1.05] mb-5 sm:mb-6 tracking-tight text-balance">
              <span className="text-foreground">Hello, I am</span>
              <br />
              <span className="text-gradient">Onyango Winstone.</span>
            </h1>

            <p className="font-mono text-sm sm:text-base text-primary mb-6 min-h-[2.75rem] sm:min-h-[1.75rem]">
              {typedRole}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-[15px] sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed text-balance">
              I&apos;m a Telecommunication and Information Engineer who enjoys
              building things that challenge the way I think. My work spans
              Software Development, AI/ML, Robotics, Embedded Systems, and
              IoT: turning complex ideas into practical solutions.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <Button
                onClick={() => scrollTo("#projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide"
              >
                <ArrowDown className="h-4 w-4 mr-2" />
                View Projects →
              </Button>
              <Button
                onClick={() => scrollTo("#contact")}
                variant="outline"
                className="rounded-sm px-8 py-3.5 h-auto border-border text-foreground hover:bg-muted hover:text-foreground text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Let&apos;s Talk
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-7 sm:mt-8">
              <a
                href="/Onyango_Winstone_Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-sm px-4 py-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="https://github.com/Winstone-Onyango"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/winstone-onyango/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:winstoneonyango76@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Stats bar — counts are derived from real data: internships from work history, technologies from skills list */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-6 mt-10 sm:mt-14 pt-8 border-t border-border/50 w-full">
              {(() => {
                const internshipCount = 4;
                const techCount = toolCategories.reduce((n, c) => n + c.tools.length, 0);
                const stats = [
                  { count: internshipCount, label: "Internships", sub: "KPLC · SHOFCO · KCB · JKUAT" },
                  { count: techCount, label: "Technologies", sub: `${toolCategories.length} skill areas` },
                  { value: "Nairobi, KE", label: "Location", sub: "Kenya" },
                  { value: "Open to work", label: "Status", sub: "Available now" },
                ];
                return stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-sm border border-border/50 bg-card/40 backdrop-blur-md px-4 py-3 sm:border-0 sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:rounded-none min-w-0"
                  >
                    <p className="text-[22px] leading-none sm:text-3xl font-bold text-primary font-mono truncate">
                      {"count" in stat ? <CountingNumber target={stat.count} /> : stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-foreground/80 uppercase tracking-widest mt-1.5">{stat.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{stat.sub}</p>
                  </div>
                ));
              })()}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end pb-4 lg:pb-0 order-1 lg:order-2">
            <div className="relative">
              {/* Phone: compact card so the hero fits above the fold; desktop: tall portrait */}
              <div className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[420px] overflow-hidden rounded-sm glass-strong mx-auto">
                <img
                  src={profile}
                  alt="Onyango Winstone — Telecommunication & Information Engineer"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-[420px] border border-primary/30 rounded-sm -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
