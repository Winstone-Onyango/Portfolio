import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

/**
 * Persistent floating WhatsApp button — visible on EVERY page/section.
 * Logo only, fixed bottom-right, pops in after a short delay with pulse.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className={`fixed z-[60] bottom-5 right-5 sm:bottom-6 sm:right-6 group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#1fb857] transition-all duration-500 hover:scale-105 active:scale-95 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75 pointer-events-none"
      }`}
    >
      {/* ping ring for the pop effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 relative shrink-0" />
      {/* tooltip on desktop hover */}
      <span className="hidden sm:group-hover:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-card border border-border px-3 py-1.5 text-xs text-foreground shadow-lg pointer-events-none">
        Chat with me on WhatsApp
      </span>
    </a>
  );
}
