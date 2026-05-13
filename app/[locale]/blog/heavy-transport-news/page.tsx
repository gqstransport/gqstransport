import { setRequestLocale } from "next-intl/server";
import { BlogHeavyTransportNewsPage } from "@/components/pages/blog/heavy-transport-news/BlogHeavyTransportNewsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogHeavyTransportNewsPage />;
}
