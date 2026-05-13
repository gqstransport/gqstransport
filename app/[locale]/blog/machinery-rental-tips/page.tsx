import { setRequestLocale } from "next-intl/server";
import { BlogMachineryRentalTipsPage } from "@/components/pages/blog/machinery-rental-tips/BlogMachineryRentalTipsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogMachineryRentalTipsPage />;
}
