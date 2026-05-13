import { setRequestLocale } from "next-intl/server";
import { EarthmovingEquipmentPage } from "@/components/pages/services/heavy-machinery-rental/earthmoving-equipment/EarthmovingEquipmentPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EarthmovingEquipmentPage />;
}
