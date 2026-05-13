import { setRequestLocale } from "next-intl/server";
import { FleetFlatbedTrailersPage } from "@/components/pages/fleet-equipment/flatbed-trailers/FleetFlatbedTrailersPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetFlatbedTrailersPage />;
}
