import { setRequestLocale } from "next-intl/server";
import { FleetHiabTrucksPage } from "@/components/pages/fleet-equipment/hiab-trucks/FleetHiabTrucksPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetHiabTrucksPage />;
}
