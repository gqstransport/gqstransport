import { setRequestLocale } from "next-intl/server";
import { BargeLoadingSupportPage } from "@/components/pages/services/project-logistics/barge-loading-support/BargeLoadingSupportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BargeLoadingSupportPage />;
}
