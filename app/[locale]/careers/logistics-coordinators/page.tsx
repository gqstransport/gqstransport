import { setRequestLocale } from "next-intl/server";
import { CareersLogisticsCoordinatorsPage } from "@/components/pages/careers/logistics-coordinators/CareersLogisticsCoordinatorsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersLogisticsCoordinatorsPage />;
}
