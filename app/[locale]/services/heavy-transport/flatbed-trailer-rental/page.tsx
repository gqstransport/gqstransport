import { setRequestLocale } from "next-intl/server";
import { FlatbedTrailerRentalPage } from "@/components/pages/services/heavy-transport/flatbed-trailer-rental/FlatbedTrailerRentalPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FlatbedTrailerRentalPage />;
}
