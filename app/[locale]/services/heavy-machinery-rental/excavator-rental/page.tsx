import { setRequestLocale } from "next-intl/server";
import { ExcavatorRentalPage } from "@/components/pages/services/heavy-machinery-rental/excavator-rental/ExcavatorRentalPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ExcavatorRentalPage />;
}
