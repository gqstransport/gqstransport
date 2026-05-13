import { setRequestLocale } from "next-intl/server";
import { PortCargoHandlingPage } from "@/components/pages/services/project-logistics/port-cargo-handling/PortCargoHandlingPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PortCargoHandlingPage />;
}
