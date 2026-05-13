import { setRequestLocale } from "next-intl/server";
import { ContactWhatsappPage } from "@/components/pages/contact-us/whatsapp-contact/ContactWhatsappPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactWhatsappPage />;
}
