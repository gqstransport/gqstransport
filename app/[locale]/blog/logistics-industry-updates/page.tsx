import { setRequestLocale } from "next-intl/server";
import { BlogLogisticsIndustryUpdatesPage } from "@/components/pages/blog/logistics-industry-updates/BlogLogisticsIndustryUpdatesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogLogisticsIndustryUpdatesPage />;
}
