import { setRequestLocale } from "next-intl/server";
import { EquipmentMobilizationPage } from "@/components/pages/services/project-logistics/equipment-mobilization/EquipmentMobilizationPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EquipmentMobilizationPage />;
}
