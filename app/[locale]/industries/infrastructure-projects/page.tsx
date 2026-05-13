import { setRequestLocale } from "next-intl/server";
import { IndustryInfrastructureProjectsPage } from "@/components/pages/industries/infrastructure-projects/IndustryInfrastructureProjectsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustryInfrastructureProjectsPage />;
}
