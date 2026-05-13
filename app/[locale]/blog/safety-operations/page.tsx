import { setRequestLocale } from "next-intl/server";
import { BlogSafetyOperationsPage } from "@/components/pages/blog/safety-operations/BlogSafetyOperationsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogSafetyOperationsPage />;
}
