import { setRequestLocale } from "next-intl/server";
import { WheelLoaderRentalPage } from "@/components/pages/services/heavy-machinery-rental/wheel-loader-rental/WheelLoaderRentalPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WheelLoaderRentalPage />;
}
