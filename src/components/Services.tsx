import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="about" className="section-padding bg-background relative scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              About
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            My Background
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p className="font-medium text-foreground">
            Grounded in Telecommunications, extending into Software and AI, I
            like systems where a signal, a line of code, and a piece of
            hardware all have to agree.
          </p>
          <p>
            I&apos;m a Telecommunication and Information Engineer who enjoys
            building things that challenge the way I think. My interests span
            Software Development, AI/ML, Robotics, Embedded Systems, and IoT.
            From writing code to working with hardware, I&apos;m driven by
            curiosity and the satisfaction of turning complex ideas into
            practical solutions.
          </p>
          <p>
            I may not know everything yet, but I&apos;m always willing to learn
            what it takes to build something meaningful.
          </p>
          <p className="text-foreground">
            Currently exploring{" "}
            <span className="text-primary">Network Automation</span>,{" "}
            <span className="text-primary">AI/ML Model Development</span>, and{" "}
            <span className="text-primary">IoT-Embedded Systems</span>.
          </p>

          {/* Continuation link — this preview leads to the one full About page */}
          <div className="pt-2">
            <Link to="/about" aria-label="Read more about me — open full about page">
              <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-7 py-3 h-auto text-sm font-semibold tracking-wide">
                More about me
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
