import { setRequestLocale } from "next-intl/server";
import { FleetEquipmentPage } from "@/components/pages/fleet-equipment/FleetEquipmentPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetEquipmentPage />;
}
