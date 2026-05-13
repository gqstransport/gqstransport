import { setRequestLocale } from "next-intl/server";
import { ShutdownLogisticsPage } from "@/components/pages/services/project-logistics/shutdown-logistics/ShutdownLogisticsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ShutdownLogisticsPage />;
}
