import { setRequestLocale } from "next-intl/server";
import { IndustrialLogisticsSupportPage } from "@/components/pages/services/heavy-transport/industrial-logistics-support/IndustrialLogisticsSupportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustrialLogisticsSupportPage />;
}
