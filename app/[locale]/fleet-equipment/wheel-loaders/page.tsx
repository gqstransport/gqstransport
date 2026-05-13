import { setRequestLocale } from "next-intl/server";
import { FleetWheelLoadersPage } from "@/components/pages/fleet-equipment/wheel-loaders/FleetWheelLoadersPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetWheelLoadersPage />;
}
