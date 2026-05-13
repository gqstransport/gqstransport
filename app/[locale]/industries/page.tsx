import { setRequestLocale } from "next-intl/server";
import { IndustriesPage } from "@/components/pages/industries/IndustriesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <IndustriesPage />;
}
