import { setRequestLocale } from "next-intl/server";
import { ContactOfficeLocationPage } from "@/components/pages/contact-us/office-location/ContactOfficeLocationPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactOfficeLocationPage />;
}
