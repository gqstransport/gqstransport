import { setRequestLocale } from "next-intl/server";
import { HiabBoomTruckServicesPage } from "@/components/pages/services/hiab-boom-truck/HiabBoomTruckServicesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HiabBoomTruckServicesPage />;
}
