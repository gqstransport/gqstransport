/** Site-wide phone — used in header, footer, WhatsApp, and contact sections */
export const SITE_PHONE_DISPLAY = "+971 54 432 2076";

/** Site-wide contact email */
export const SITE_EMAIL = "info@gqstransport.com";

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
