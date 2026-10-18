import type { ReactNode } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

export function Footer({ hideCTA = false }: { hideCTA?: boolean } = {}) {
  return (
    <footer id="contact" className="relative overflow-hidden scroll-mt-20">
      {/* CTA Section */}
      {!hideCTA && (
      <div className="section-padding bg-card relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Let&apos;s build something together
              </h2>
              <p className="text-muted-foreground">
                Have a role, collaboration, or project in mind? Send me a message
                through the form below, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              <div className="space-y-3">
                <ContactRow
                  href={`mailto:${CONTACT_EMAIL}`}
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={CONTACT_EMAIL}
                />
                <ContactRow
                  href={`tel:${CONTACT_PHONE}`}
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value={CONTACT_PHONE_DISPLAY}
                />
                <ContactRow
                  href={WHATSAPP_URL}
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  label="WhatsApp"
                  value="Chat with me on WhatsApp"
                  external
                />
                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Location"
                  value="Nairobi, Kenya"
                />
                <div className="flex items-center gap-4 pt-3">
                  <a
                    href="https://github.com/Winstone-Onyango"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/winstone-onyango/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Right — contact form, delivered straight to my inbox */}
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
      )}

      {/* Bottom bar */}
      <div className="bg-background border-t border-border/50">
        <div className="section-container py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto min-w-0">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors min-w-0"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{CONTACT_EMAIL}</span>
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

function ContactRow({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href?: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  const className =
    "group flex items-center gap-4 glass rounded-sm p-4 hover:border-primary/40 transition-colors";
  const content = (
    <>
      <span className="w-10 h-10 shrink-0 rounded-sm bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
        <span className="block text-sm text-foreground break-all">{value}</span>
      </span>
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
