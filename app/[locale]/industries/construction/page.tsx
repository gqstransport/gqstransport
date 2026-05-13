import { setRequestLocale } from "next-intl/server";
import { IndustryConstructionPage } from "@/components/pages/industries/construction/IndustryConstructionPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustryConstructionPage />;
}
