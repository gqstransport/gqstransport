import { setRequestLocale } from "next-intl/server";
import { IndustryIndustrialManufacturingPage } from "@/components/pages/industries/industrial-manufacturing/IndustryIndustrialManufacturingPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustryIndustrialManufacturingPage />;
}
