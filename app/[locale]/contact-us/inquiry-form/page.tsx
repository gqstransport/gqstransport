import { setRequestLocale } from "next-intl/server";
import { ContactInquiryFormPage } from "@/components/pages/contact-us/inquiry-form/ContactInquiryFormPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactInquiryFormPage />;
}
