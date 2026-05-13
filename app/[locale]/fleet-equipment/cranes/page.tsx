import { setRequestLocale } from "next-intl/server";
import { FleetCranesPage } from "@/components/pages/fleet-equipment/cranes/FleetCranesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FleetCranesPage />;
}
