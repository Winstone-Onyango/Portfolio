import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

/* ----- Personal photos (bundled) ----- */
import heroSunset from "@/assets/sunset-ocean-hero.jpg";
import portraitGrad from "@/assets/profile.jpg";

const PH = {
  hero: heroSunset,
  portrait: portraitGrad,
};

const passions = [
  { title: "Engineering", insight: "I've always been fascinated by how ideas become reality." },
  { title: "Creativity", insight: "Making space for ideas to breathe is its own discipline." },
  { title: "Photography", insight: "Photography teaches me to notice what others often overlook." },
  { title: "Travel", insight: "Every place I visit rewrites a small part of how I see the world." },
  { title: "Ocean Exploration", insight: "The coast is where I think most clearly." },
  { title: "Books", insight: "Every good book leaves me with a new perspective." },
  { title: "Music", insight: "A few chords can carry an entire memory." },
  { title: "Nature", insight: "Trails remind me that progress is just one steady step at a time." },
  { title: "Continuous Learning", insight: "Curiosity is the one habit I refuse to outgrow." },
];

const values = [
  { title: "Lifelong Learning", body: "Always exploring new ideas, skills, and perspectives." },
  { title: "Integrity", body: "Doing the right thing, even when nobody is watching." },
  { title: "Creativity", body: "Finding innovative ways to solve problems and express ideas." },
  { title: "Growth", body: "Believing that every experience has something to teach." },
];

export default function About() {
  useEffect(() => {
    document.title = "About";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Beyond engineering — the person, passions, and curiosity of Onyango Winstone: telecom, software, AI, robotics, embedded systems and IoT.");
    // Always land on the FIRST page (hero) of About — never restore mid-page scroll
    window.scrollTo({ top: 0, behavior: "auto" });
    // Also clear any #hash so the browser doesn't jump to a later section
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhoIAm />
        <QuoteSection />
        <Values />
        <Closing />
      </main>
      <Footer hideCTA />
    </div>
  );
}

/* ---------------- SECTION 1: HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[92svh] sm:h-screen sm:min-h-[640px] w-full overflow-hidden">
      <img src={PH.hero} alt="Winstone — beyond engineering" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover object-center sm:object-center pointer-events-none select-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      <div className="relative z-10 min-h-[92svh] sm:h-full section-container flex flex-col justify-center py-24 sm:py-0">
        <div className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 max-w-full px-3 py-1.5 glass rounded-sm mb-5 sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.1em] sm:text-[11px] sm:tracking-[0.25em] text-primary uppercase">
              Explorer  · Learner · Engineer
            </span>
          </div>
          <h1 className="font-display text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Beyond
            <br />
            <span className="text-primary italic font-medium">Engineering.</span>
          </h1>
          <p className="mt-5 sm:mt-8 max-w-xl text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
            Curiosity has always been at the center of everything I do, from building
            to exploring new places, learning new skills, and discovering new perspectives.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/70">
            <Link to="/#about" className="hover:text-primary transition-colors">← Preview</Link>
            <span className="mx-2 text-primary/50"></span>
          </p>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-mono tracking-[0.3em] text-foreground/70 hover:text-primary transition-colors"
      >
        EXPLORE MY STORY
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

/* ---------------- SECTION 2: WHO I AM ---------------- */
function WhoIAm() {
  const paragraphs = [
    <>Honestly, engineering has been in the background of my life for as long as I can remember. As a kid, I was the type who would stare at machines, and how things connect and wonder, <em className="text-foreground/90">“How does that actually work?”</em> Somewhere along the way, that curiosity turned into a passion, and before I knew it, I was studying Telecommunication and Information Engineering.</>,
    <>What I love most about engineering is getting to see <span className="text-primary">ideas become reality</span>. There’s something really satisfying about watching a project go from a concept to something tangible: where a signal, a line of code, and a piece of hardware all have to agree.</>,
    <>But there’s definitely more to me than engineering.</>,
    <>I enjoy <span className="text-primary">drawing</span> and <span className="text-primary">playing football</span>. Drawing gives me a creative outlet while football is my way of unwinding and enjoying the game.</>,
    <>At the end of the day, it all comes back to the same thing: <span className="text-primary font-medium">curiosity</span>. I genuinely enjoy learning, exploring, and growing, and I think that’s what keeps life interesting.</>,
  ];

  return (
    <section id="story" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative max-w-sm mx-auto lg:max-w-none w-full">
              <div className="absolute -inset-2 sm:-inset-3 border border-primary/40" />
              <div className="relative w-full aspect-[4/5] max-h-[420px] sm:max-h-[520px] overflow-hidden">
                <img
                  src={PH.portrait}
                  alt="Onyango Winstone portrait"
                  draggable={false}
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover object-top pointer-events-none select-none grayscale-[15%]"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-mono text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">Who I Am</p>
              <h2 className="font-display text-[1.9rem] leading-tight sm:text-5xl md:text-6xl font-light tracking-tight mt-3 text-balance">
                Hey, I’m <span className="italic text-primary">Winstone</span>.
              </h2>
            </ScrollReveal>
            <div className="mt-6 sm:mt-10 space-y-5 sm:space-y-6 text-[15px] sm:text-lg leading-relaxed text-foreground/80">
              {paragraphs.map((p, i) => (
                <ScrollReveal key={i}>
                  <p className={i === 0 ? "first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-display first-letter:font-medium first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}>
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 4: PASSION WALL ---------------- */
function PassionWall() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 px-1">
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">04 — Curiosity</p>
            <h2 className="font-display text-[1.9rem] leading-tight sm:text-5xl md:text-6xl font-light tracking-tight mt-3 text-balance">
              What Keeps Me <span className="italic text-primary">Curious</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {passions.map((p, i) => (
            <ScrollReveal key={p.title}>
              <div
                className="group relative h-40 sm:h-44 md:h-56 border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                <div className="relative h-full p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[17px] leading-snug sm:text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    {/* Always visible on touch (no hover), reveal-on-hover on desktop */}
                    <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-snug sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-500 sm:max-h-0 sm:group-hover:max-h-32 sm:overflow-hidden">
                      “{p.insight}”
                    </p>
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


/* ---------------- SECTION 6: QUOTE ---------------- */
function QuoteSection() {
  return (
    <section className="relative min-h-[62svh] sm:h-[70vh] sm:min-h-[480px] flex items-center justify-center overflow-hidden py-16 sm:py-0">
      <img src={PH.hero} alt="Ocean sunset" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative section-container text-center px-5">
        <ScrollReveal>
          <span className="font-display text-6xl sm:text-7xl md:text-8xl text-primary/40 leading-none">“</span>
          <blockquote className="font-display text-[1.45rem] leading-snug sm:text-3xl md:text-5xl font-light max-w-4xl mx-auto -mt-2 sm:-mt-4 text-balance">
            "I have no special talents, I am only <span className="italic text-primary">passionately curious"</span>.
          </blockquote>
          <div className="mt-8 inline-flex flex-wrap justify-center items-center gap-3 font-mono text-[10px] tracking-[0.15em] sm:text-[11px] sm:tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            Albert Einstein
            <span className="h-px w-10 bg-primary" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7: VALUES ---------------- */
function Values() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">04 — Principles</p>
            <h2 className="font-display text-[1.9rem] leading-tight sm:text-5xl md:text-6xl font-light tracking-tight mt-3 text-balance">
              What Matters <span className="italic text-primary">To Me</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title}>
              <div className="group relative h-full border border-border bg-card/40 p-5 sm:p-6 md:p-7 hover:border-primary transition-all duration-500">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4 sm:mb-6">0{i + 1}</div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium">{v.title}</h3>
                <div className="mt-3 sm:mt-4 h-px w-10 bg-primary/60 group-hover:w-full transition-all duration-700" />
                <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 8: CLOSING ---------------- */
function Closing() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="section-container relative text-center">
        <ScrollReveal>
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary uppercase">— Until next time</p>
          <h2 className="font-display text-[2rem] leading-tight sm:text-5xl md:text-7xl font-light tracking-tight mt-4 text-balance">
            Thanks for <span className="italic text-primary">stopping by</span>.
          </h2>
          <div className="mt-6 sm:mt-8 max-w-2xl mx-auto space-y-4 sm:space-y-5 text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Telecom may be my foundation, but curiosity, software, AI, and
              hardware are what drive me every day.
            </p>
            <p>
              Whether I am building a platform, training a model, tracking with
              a camera and motors, or configuring a network, I am always
              looking for opportunities to learn, grow, and build something
              meaningful.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/#about">
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-sm px-8 py-3.5 h-auto border-border text-foreground hover:bg-muted hover:text-foreground text-sm font-semibold tracking-wide"
              >
                ← Back home
              </Button>
            </Link>
            <Link to="/#contact">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide">
                Let’s Connect →
              </Button>
            </Link>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60">
            Back home returns to My Background
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
