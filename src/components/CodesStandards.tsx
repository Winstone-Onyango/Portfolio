import { ScrollReveal } from "@/components/ScrollReveal";
import { Award } from "lucide-react";

import certKubernetes from "@/assets/certs/kubernetes.jpeg";
import certPlp from "@/assets/certs/PLP.jpeg";
import certAiSecurity from "@/assets/certs/AI Security and Governance.jpeg";
import certPrivacyOps from "@/assets/certs/PrivacyOps Academy Certified.jpeg";
import certIntroK8s from "@/assets/certs/Introduction to Kubernetes.jpeg";
import certIntroLinux from "@/assets/certs/Introduction to Linux.jpeg";
import certKcne from "@/assets/certs/Kubernetes and Cloud Native Essentials.jpeg";
import certCisco from "@/assets/certs/Cisco Packet Tracer.jpeg";
import gown from "@/assets/gown.jpg";
import certAI from "@/assets/certs/SIC.jpg";

import logoJhub from "@/assets/logos/jhub.jpg";
import logoAndela from "@/assets/logos/andela.jpg";
import logoJkuat from "@/assets/logos/jkuat.jpg";
import logoPlp from "@/assets/logos/plp.jpg";
import logoCisco from "@/assets/logos/Cisco.jpg";

interface Certificate {
  year: string;
  issuer: string;
  img?: string;
  logo?: string;
  emoji?: string;
  title: string;
  desc: string;
}

const certificates: Certificate[] = [
  {
    year: "2026",
    issuer: "Samsung Innovation Campus & JHUB Africa",
    logo: logoJhub,
    img: certAI,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Intensive AI/ML training covering data preparation, supervised and unsupervised learning, model evaluation, and deploying practical Python-based models.",
  },
  {
    year: "2026",
    issuer: "JKUAT",
    logo: logoJkuat,
    img: gown,
    title: "B.Sc. Telecommunication & Information Engineering",
    desc: "Degree awarded with Second Class Honors (Upper Division).",
  },
  {
    year: "2026",
    issuer: "Samsung Innovation Campus & JHUB Africa",
    logo: logoJhub,
    img: certAiSecurity,
    title: "AI Security and Governance",
    desc: "Securing AI systems end to end: threat models for machine learning, responsible-AI governance frameworks, and safe deployment practices.",
  },
  {
    year: "2026",
    issuer: "PrivacyOps Academy",
    logo: logoJhub,
    img: certPrivacyOps,
    title: "PrivacyOps Certified",
    desc: "Data-privacy operations and compliance: privacy frameworks, data protection principles, and building privacy-first products and processes.",
  },
  {
    year: "2025",
    issuer: "Power Learn Project Academy (PLP)",
    logo: logoPlp,
    img: certPlp,
    title: "Software Development",
    desc: "Flutter and web development, database management, Python programming, and AI for software engineering, delivered as a project-based cohort.",
  },
  {
    year: "2026",
    issuer: "Andela & The Linux Foundation",
    logo: logoAndela,
    img: certIntroK8s,
    title: "Introduction to Kubernetes",
    desc: "Hands-on introduction to container orchestration: cluster architecture, workloads, services, and managing applications at scale with kubectl.",
  },
  {
    year: "2026",
    issuer: "Andela & The Linux Foundation",
    logo: logoAndela,
    img: certIntroLinux,
    title: "Introduction to Linux",
    desc: "Linux fundamentals: the command line, filesystem hierarchy, package management, permissions, and day-to-day system administration basics.",
  },
  {
    year: "2026",
    issuer: "Andela & The Linux Foundation",
    logo: logoAndela,
    img: certKcne,
    title: "Kubernetes and Cloud Native Essentials",
    desc: "The cloud native ecosystem end to end: containers, orchestration, service networking, and the tooling behind modern deployments.",
  },
  {
    year: "2026",
    issuer: "Andela & The Linux Foundation",
    logo: logoAndela,
    img: certKubernetes,
    title: "Kubernetes & Cloud Native Associate",
    desc: "Container orchestration fundamentals: pods, services, deployments and scaling, plus the cloud native stack and Linux tooling that supports it.",
  },
  {
    year: "2025",
    issuer: "Cisco Networking Academy",
    logo: logoCisco,
    img: certCisco,
    title: "Cisco Packet Tracer",
    desc: "Network design and simulation: building and testing topologies, configuring routers and switches, and practising IP addressing virtually.",
  },
];

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <div className="glass rounded-sm overflow-hidden h-full flex flex-col hover:border-primary/40 transition-all group">
      <div className="relative aspect-[4/3] border-b border-border/50 bg-background/60">
        {cert.img ? (
          <img
            src={cert.img}
            alt={cert.title + " certificate"}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl" role="img" aria-label={cert.title}>
              {cert.emoji}
            </span>
          </div>
        )}
        <span className="absolute top-3 right-3 font-mono text-xs text-primary bg-background/85 border border-primary/30 px-2 py-0.5 rounded-sm">
          {cert.year}
        </span>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          {cert.logo ? (
            <img src={cert.logo} alt="" className="h-5 w-auto shrink-0" />
          ) : (
            <Award className="h-4 w-4 text-primary shrink-0" />
          )}
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            {cert.issuer}
          </p>
        </div>
        <h3 className="font-semibold text-foreground mb-2 leading-snug">
          {cert.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {cert.desc}
        </p>
      </div>
    </div>
  );
}

export function CodesStandards() {
  return (
    <section id="codes" className="section-padding bg-muted/30 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Certifications & credentials
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
        </ScrollReveal>
      </div>

      {/* Endless auto-scrolling certificate strip */}
      <div className="relative z-10 mt-10 marquee-mask">
        <div className="flex w-max marquee-track">
          {[...certificates, ...certificates].map((cert, i) => (
            <div key={i} className="w-[270px] sm:w-[320px] shrink-0 px-2 md:px-3">
              <CertCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
