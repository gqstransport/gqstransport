import { setRequestLocale } from "next-intl/server";
import { HiabSiteInstallationSupportPage } from "@/components/pages/services/hiab-boom-truck/site-installation-support/HiabSiteInstallationSupportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HiabSiteInstallationSupportPage />;
}
