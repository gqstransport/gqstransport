import { setRequestLocale } from "next-intl/server";
import { FleetLowbedTrailersPage } from "@/components/pages/fleet-equipment/lowbed-trailers/FleetLowbedTrailersPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetLowbedTrailersPage />;
}
