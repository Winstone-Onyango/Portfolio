import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Footer({ hideCTA = false }: { hideCTA?: boolean } = {}) {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      {!hideCTA && (
      <div className="section-padding bg-card relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="section-container text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto text-foreground">
              Let&apos;s build something together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4">
              Have a role, collaboration, or project in mind? Send me a message,
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
              <a
                href="mailto:winstoneonyango76@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                winstoneonyango76@gmail.com
              </a>
              <a
                href="tel:+254791002178"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +254 791 002 178
              </a>
              <a
                href="https://wa.me/254791002178"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              Nairobi, Kenya
            </p>
            <div className="flex items-center justify-center gap-3 mt-4 text-sm">
              <a
                href="https://github.com/Winstone-Onyango"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/winstone-onyango/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
            <div className="mt-8">
              <a href="mailto:winstoneonyango76@gmail.com">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-3.5 h-auto text-sm font-semibold tracking-wide">
                  Send Message
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      )}

      {/* Bottom bar */}
      <div className="bg-background border-t border-border/50">
        <div className="section-container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:winstoneonyango76@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                winstoneonyango76@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/winstone-onyango/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Nairobi, Kenya
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Onyango Winstone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
