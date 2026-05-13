import { setRequestLocale } from "next-intl/server";
import { ContactGoogleMapPage } from "@/components/pages/contact-us/google-map/ContactGoogleMapPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactGoogleMapPage />;
}
