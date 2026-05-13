import { setRequestLocale } from "next-intl/server";
import { OperationalAreasPage } from "@/components/pages/about-us/operational-areas/OperationalAreasPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OperationalAreasPage />;
}
