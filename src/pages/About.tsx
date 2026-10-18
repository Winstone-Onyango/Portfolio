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
    document.title = "About — Onyango Winstone | Beyond Engineering";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Beyond engineering — the person, passions, and curiosity of Onyango Winstone: telecom, software, AI, robotics, embedded systems and IoT.");
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
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img src={PH.hero} alt="Winstone — beyond engineering" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />

      <div className="relative z-10 h-full section-container flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 max-w-full px-3 py-1.5 glass rounded-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="font-mono text-[10px] tracking-[0.1em] sm:text-[11px] sm:tracking-[0.25em] text-primary uppercase">
              Explorer · Creator · Learner · Engineer
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]">
            Beyond
            <br />
            <span className="text-primary italic font-medium">Engineering.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Curiosity has always been at the center of everything I do, from building structures
            to exploring new places, learning new skills, and discovering new perspectives.
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
    <>Honestly, engineering has been in the background of my life for as long as I can remember. As a kid, I was the type who would stare at signals, machines, and how things connect and wonder, <em className="text-foreground/90">“How does that actually work?”</em> Somewhere along the way, that curiosity turned into a passion, and before I knew it, I was studying telecommunication and information engineering.</>,
    <>What I love most about engineering is getting to see <span className="text-primary">ideas become reality</span>. There’s something really satisfying about watching a project go from a concept to something tangible — where a signal, a line of code, and a piece of hardware all have to agree.</>,
    <>But there’s definitely more to me than engineering.</>,
    <>When I’m not building, I’m usually exploring across <span className="text-primary">software development</span>, <span className="text-primary">AI/ML</span>, <span className="text-primary">robotics</span>, <span className="text-primary">embedded systems</span>, and <span className="text-primary">IoT</span> — from writing code to working with hardware.</>,
    <>Currently I’m exploring <span className="text-primary">network automation</span>, <span className="text-primary">AI/ML model development</span>, and <span className="text-primary">IoT-embedded systems</span>. I may not know everything yet, but I’m always willing to learn what it takes to build something meaningful.</>,
    <>At the end of the day, it all comes back to the same thing: <span className="text-primary font-medium">curiosity</span>. I genuinely enjoy learning, exploring, and growing, and I think that’s what keeps life interesting.</>,
  ];

  return (
    <section id="story" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/40" />
              <img
                src={PH.portrait}
                alt="Onyango Winstone portrait"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="relative w-full h-auto object-contain pointer-events-none select-none grayscale-[15%]"
              />
              <div className="mt-4 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                Onyango Winstone, In Pursuit of Possibility
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Who I Am</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
                Hey, I’m <span className="italic text-primary">Winstone</span>.
              </h2>
            </ScrollReveal>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/80">
              {paragraphs.map((p, i) => (
                <ScrollReveal key={i}>
                  <p className={i === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:font-medium first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}>
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">04 — Curiosity</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
              What Keeps Me <span className="italic text-primary">Curious</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {passions.map((p, i) => (
            <ScrollReveal key={p.title}>
              <div
                className="group relative h-44 md:h-56 border border-border hover:border-primary bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ transform: `translateY(${(i % 3) * 12}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
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
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
      <img src={PH.hero} alt="Ocean sunset" draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative section-container text-center">
        <ScrollReveal>
          <span className="font-display text-7xl md:text-8xl text-primary/40 leading-none">“</span>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-light leading-snug max-w-4xl mx-auto -mt-4">
            Curiosity is what led me to engineering, and it’s what continues to
            guide every <span className="italic text-primary">new journey</span>.
          </blockquote>
          <div className="mt-8 inline-flex flex-wrap justify-center items-center gap-3 font-mono text-[10px] tracking-[0.15em] sm:text-[11px] sm:tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            Onyango Winstone
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
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">04 — Principles</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mt-3">
              What Matters <span className="italic text-primary">To Me</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ScrollReveal key={v.title}>
              <div className="group relative h-full border border-border bg-card/40 p-6 md:p-7 hover:border-primary transition-all duration-500">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-6">0{i + 1}</div>
                <h3 className="font-display text-xl md:text-2xl font-medium">{v.title}</h3>
                <div className="mt-4 h-px w-10 bg-primary/60 group-hover:w-full transition-all duration-700" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
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
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">— Until next time</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mt-4">
            Thanks for <span className="italic text-primary">stopping by</span>.
          </h2>
          <div className="mt-8 max-w-2xl mx-auto space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
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
          <div className="mt-10">
            <Link to="/#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide">
                Let’s Connect →
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
