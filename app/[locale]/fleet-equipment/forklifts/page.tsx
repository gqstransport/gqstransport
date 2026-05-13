import { setRequestLocale } from "next-intl/server";
import { FleetForkliftsPage } from "@/components/pages/fleet-equipment/forklifts/FleetForkliftsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetForkliftsPage />;
}
