import { setRequestLocale } from "next-intl/server";
import { IndustrySteelFabricationPage } from "@/components/pages/industries/steel-fabrication/IndustrySteelFabricationPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustrySteelFabricationPage />;
}
