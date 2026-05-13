import { setRequestLocale } from "next-intl/server";
import { CraneRentalPage } from "@/components/pages/services/heavy-machinery-rental/crane-rental/CraneRentalPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CraneRentalPage />;
}
