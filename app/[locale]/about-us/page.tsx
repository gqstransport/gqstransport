import { setRequestLocale } from "next-intl/server";
import { AboutUsPage } from "@/components/pages/about-us/AboutUsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutUsPage />;
}
