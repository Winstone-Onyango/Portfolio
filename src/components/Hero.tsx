import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const ROLES = [
  "Telecommunication and Information Engineer",
  "AI/ML Engineer",
  "Network Design and Management",
  "Robotics IoT & Automation",
  "Software Developer",
  "Electrical & Embedded Systems",
];

/** Slow oscillating counter: 0 -> target, holds at target, -> 0, looping (hero stats). */
function CountingNumber({ target }: { target: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    // Slow counter: counts up, rests at the top for a few seconds,
    // counts back down, then restarts.
    const stepMs = Math.max(90, Math.min(450, Math.round(2000 / Math.max(target, 1))));
    const holdMs = 3200; // stay at the highest number before restarting
    const restMs = 1200; // brief pause at zero
    let current = 0;
    let direction: 1 | -1 = 1;
    let timer = 0;

    const run = () => {
      const next = current + direction;
      if (next > target) {
        direction = -1; // reached the top — hold, then count back down
        timer = window.setTimeout(run, holdMs);
        return;
      }
      if (next < 0) {
        direction = 1; // reached zero — pause, then count back up
        timer = window.setTimeout(run, restMs);
        return;
      }
      current = next;
      setValue(current);
      timer = window.setTimeout(run, stepMs);
    };

    timer = window.setTimeout(run, stepMs);
    return () => window.clearTimeout(timer);
  }, [target]);

  return <>{value}+</>;
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
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/70 sm:bg-gradient-to-r sm:from-background sm:via-background/95 sm:to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex flex-wrap items-center gap-2 max-w-full px-3 py-1.5 glass rounded-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-mono text-[9px] sm:text-xs tracking-[0.08em] sm:tracking-widest text-primary uppercase">
                TELECOMMUNICATION & INFORMATION ENGINEER
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              <span className="text-foreground">Hello, I am</span>
              <br />
              <span className="text-gradient">Onyango Winstone.</span>
            </h1>

            <p className="font-mono text-sm sm:text-base text-primary mb-6 min-h-[2.75rem] sm:min-h-[1.75rem]">
              {typedRole}
              <span className="animate-pulse">|</span>
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              I&apos;m a Telecommunication and Information Engineer who enjoys
              building things that challenge the way I think. My work spans
              Software Development, AI/ML, Robotics, Embedded Systems, and
              IoT: turning complex ideas into practical solutions.
            </p>

            <div className="flex flex-wrap gap-4">
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

            <div className="flex flex-wrap items-center gap-3 mt-8">
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
                href="mailto:winstoneonyango76@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-x-5 gap-y-4 sm:gap-x-8 sm:gap-y-6 mt-14 pt-8 border-t border-border/50">
              {[
                { count: 4, label: "Internships" },
                { count: 25, label: "Technologies" },
                { value: "Nairobi, KE", label: "Location" },
                { value: "Open to work", label: "Status" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-primary font-mono">
                    {"count" in stat ? <CountingNumber target={stat.count} /> : stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[420px] overflow-hidden rounded-sm glass-strong">
                <img
                  src={profile}
                  alt="Onyango Winstone — Telecommunication & Information Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-60 sm:w-72 md:w-80 h-72 sm:h-80 md:h-[420px] border border-primary/30 rounded-sm -z-10" />
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
