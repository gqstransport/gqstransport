import { setRequestLocale } from "next-intl/server";
import { IndustryPortsMarinePage } from "@/components/pages/industries/ports-marine/IndustryPortsMarinePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustryPortsMarinePage />;
}
