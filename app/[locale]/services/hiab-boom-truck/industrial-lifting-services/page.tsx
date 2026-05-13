import { setRequestLocale } from "next-intl/server";
import { HiabIndustrialLiftingServicesPage } from "@/components/pages/services/hiab-boom-truck/industrial-lifting-services/HiabIndustrialLiftingServicesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HiabIndustrialLiftingServicesPage />;
}
