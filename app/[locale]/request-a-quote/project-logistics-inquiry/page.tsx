import { setRequestLocale } from "next-intl/server";
import { QuoteProjectLogisticsInquiryPage } from "@/components/pages/request-a-quote/project-logistics-inquiry/QuoteProjectLogisticsInquiryPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <QuoteProjectLogisticsInquiryPage />;
}
