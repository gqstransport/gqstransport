import { setRequestLocale } from "next-intl/server";
import { HeavyTransportServicesPage } from "@/components/pages/services/heavy-transport/HeavyTransportServicesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HeavyTransportServicesPage />;
}
