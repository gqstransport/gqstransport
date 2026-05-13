import { setRequestLocale } from "next-intl/server";
import { CompanyOverviewPage } from "@/components/pages/about-us/company-overview/CompanyOverviewPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CompanyOverviewPage />;
}
