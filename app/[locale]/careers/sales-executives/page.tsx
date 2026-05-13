import { setRequestLocale } from "next-intl/server";
import { CareersSalesExecutivesPage } from "@/components/pages/careers/sales-executives/CareersSalesExecutivesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersSalesExecutivesPage />;
}
