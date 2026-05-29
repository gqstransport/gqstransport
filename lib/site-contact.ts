/** Site-wide phone — used in header, footer, WhatsApp, and contact sections */
export const SITE_PHONE_DISPLAY = "+91 97890 98633";
export const SITE_PHONE_WHATSAPP = "+919789098633";

/** Site-wide contact email */
export const SITE_EMAIL = "trade@gqstransport.com";

/** Digits only for wa.me (no + or spaces) */
export function phoneToWhatsAppDigits(phone: string = SITE_PHONE_DISPLAY): string {
  return phone.replace(/\D/g, "");
}

/** tel: link href */
export function phoneToTelHref(phone: string = SITE_PHONE_DISPLAY): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** https://wa.me/... link */
export function phoneToWhatsAppHref(phone: string = SITE_PHONE_DISPLAY): string {
  return `https://wa.me/${phoneToWhatsAppDigits(phone)}`;
}
