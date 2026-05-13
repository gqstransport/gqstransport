import { setRequestLocale } from "next-intl/server";
import { CrossBorderTransportPage } from "@/components/pages/services/heavy-transport/cross-border-transport/CrossBorderTransportPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CrossBorderTransportPage />;
}
