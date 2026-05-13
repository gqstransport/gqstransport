import { setRequestLocale } from "next-intl/server";
import { HiabMaterialHandlingPage } from "@/components/pages/services/hiab-boom-truck/material-handling/HiabMaterialHandlingPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HiabMaterialHandlingPage />;
}
