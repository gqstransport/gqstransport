import { setRequestLocale } from "next-intl/server";
import { VisionMissionPage } from "@/components/pages/about-us/vision-mission/VisionMissionPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VisionMissionPage />;
}
