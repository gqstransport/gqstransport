import { setRequestLocale } from "next-intl/server";
import { WhyChooseUsAboutPage } from "@/components/pages/about-us/why-choose-us/WhyChooseUsAboutPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhyChooseUsAboutPage />;
}
