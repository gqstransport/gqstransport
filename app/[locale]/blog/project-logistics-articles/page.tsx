import { setRequestLocale } from "next-intl/server";
import { BlogProjectLogisticsArticlesPage } from "@/components/pages/blog/project-logistics-articles/BlogProjectLogisticsArticlesPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogProjectLogisticsArticlesPage />;
}
