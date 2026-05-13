import { setRequestLocale } from "next-intl/server";
import { ProjectCrossBorderLogisticsPage } from "@/components/pages/projects/cross-border-logistics/ProjectCrossBorderLogisticsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectCrossBorderLogisticsPage />;
}
