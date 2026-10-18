import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "@/lib/contact";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  subject: z.string().trim().min(2, "Please add a subject"),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/** How long the success message stays up before returning to a fresh form. */
const SUCCESS_HOLD_MS = 4500;

const fieldClass = "mt-2 rounded-sm bg-background/60";
const labelClass =
  "block font-mono text-[10px] tracking-widest text-primary uppercase mb-0.5";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  /** Clear everything and land the visitor back on the contact section. */
  const backToContactForm = useCallback(() => {
    reset();
    setSent(false);
    setSentName("");
    setSendError(null);
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [reset]);

  // Once the success message has been visible for a moment, refresh
  // back to a clean contact form in the contact section.
  useEffect(() => {
    if (!sent) return;
    const timer = window.setTimeout(() => backToContactForm(), SUCCESS_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [sent, backToContactForm]);

  const onSubmit = async (values: ContactFormValues) => {
    setSending(true);
    setSendError(null);
    try {
      // FormSubmit delivers the message straight to my inbox — no mail app opens.
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _subject: values.subject,
          message: values.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
      setSentName(values.name.split(" ")[0]);
      setSent(true);
    } catch {
      setSendError(
        "Sorry, your message could not be sent right now. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  const fieldError = (message?: string) =>
    message ? (
      <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
        <AlertCircle className="h-3 w-3 shrink-0" />
        {message}
      </p>
    ) : null;

  return (
    <div className="glass-strong rounded-sm p-5 sm:p-7 md:p-8 relative overflow-hidden">
      {/* Corner brackets — same treatment as the project cards */}
      <span className="absolute top-3 left-3 w-3 h-3 border-l border-t border-primary/60 pointer-events-none" />
      <span className="absolute top-3 right-3 w-3 h-3 border-r border-t border-primary/60 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-primary/60 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-primary/60 pointer-events-none" />

      {sent ? (
        <div className="py-10 text-center animate-fade-in">
          <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Message sent!
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Thanks{sentName ? `, ${sentName}` : ""} — your message is on its way
            to my inbox. I&apos;ll get back to you soon.
          </p>
          <Button
            type="button"
            onClick={backToContactForm}
            variant="outline"
            className="mt-6 rounded-sm border-border text-foreground hover:border-primary hover:text-primary"
          >
            Send another message
          </Button>
        </div>
      ) : (

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <Input
                id="contact-name"
                placeholder="Your name"
                autoComplete="name"
                className={fieldClass}
                {...register("name")}
              />
              {fieldError(errors.name?.message)}
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className={fieldClass}
                {...register("email")}
              />
              {fieldError(errors.email?.message)}
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className={labelClass}>
              Subject
            </label>
            <Input
              id="contact-subject"
              placeholder="What is this about?"
              className={fieldClass}
              {...register("subject")}
            />
            {fieldError(errors.subject?.message)}
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message
            </label>
            <Textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about the role, collaboration, or project..."
              className={`${fieldClass} min-h-[120px] resize-y`}
              {...register("message")}
            />
            {fieldError(errors.message?.message)}
          </div>

          {sendError && (
            <p className="text-xs text-destructive flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {sendError}
            </p>
          )}

          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm py-3 h-auto text-sm font-semibold tracking-wide"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
