import { setRequestLocale } from "next-intl/server";
import { ServicesPage } from "@/components/pages/services/ServicesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesPage />;
}
