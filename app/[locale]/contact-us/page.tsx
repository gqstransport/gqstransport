import { setRequestLocale } from "next-intl/server";
import { ContactUsPage } from "@/components/pages/contact-us/ContactUsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactUsPage />;
}
