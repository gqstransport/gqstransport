import { setRequestLocale } from "next-intl/server";
import { CareersDriversPage } from "@/components/pages/careers/drivers/CareersDriversPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersDriversPage />;
}
