import { setRequestLocale } from "next-intl/server";
import { ProjectHeavyEquipmentTransportPage } from "@/components/pages/projects/heavy-equipment-transport/ProjectHeavyEquipmentTransportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectHeavyEquipmentTransportPage />;
}
