import { setRequestLocale } from "next-intl/server";
import { CoreValuesPage } from "@/components/pages/about-us/core-values/CoreValuesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CoreValuesPage />;
}
