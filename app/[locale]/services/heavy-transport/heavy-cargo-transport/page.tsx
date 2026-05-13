import { setRequestLocale } from "next-intl/server";
import { HeavyCargoTransportPage } from "@/components/pages/services/heavy-transport/heavy-cargo-transport/HeavyCargoTransportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HeavyCargoTransportPage />;
}
