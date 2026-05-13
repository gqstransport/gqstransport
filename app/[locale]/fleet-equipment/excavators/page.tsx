import { setRequestLocale } from "next-intl/server";
import { FleetExcavatorsPage } from "@/components/pages/fleet-equipment/excavators/FleetExcavatorsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetExcavatorsPage />;
}
