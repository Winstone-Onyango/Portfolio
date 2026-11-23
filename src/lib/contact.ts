/** Central place for the contact channels shown across the portfolio. */
export const CONTACT_EMAIL = "winstoneonyango76@gmail.com";
export const CONTACT_PHONE = "+254791002178";
export const CONTACT_PHONE_DISPLAY = "+254 791 002 178";
export const WHATSAPP_NUMBER = "254791002178";
export const WHATSAPP_MESSAGE =
  "Hi Winstone, I saw your profile and would like to talk";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// EmailJS configuration — values loaded from .env.local (gitignored, never committed)
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
