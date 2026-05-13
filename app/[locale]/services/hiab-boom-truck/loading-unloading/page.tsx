import { setRequestLocale } from "next-intl/server";
import { HiabLoadingUnloadingPage } from "@/components/pages/services/hiab-boom-truck/loading-unloading/HiabLoadingUnloadingPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HiabLoadingUnloadingPage />;
}
