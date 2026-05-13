import { setRequestLocale } from "next-intl/server";
import { HeavyMachineryRentalServicesPage } from "@/components/pages/services/heavy-machinery-rental/HeavyMachineryRentalServicesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HeavyMachineryRentalServicesPage />;
}
