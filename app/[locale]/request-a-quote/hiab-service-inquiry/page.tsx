import { setRequestLocale } from "next-intl/server";
import { QuoteHiabServiceInquiryPage } from "@/components/pages/request-a-quote/hiab-service-inquiry/QuoteHiabServiceInquiryPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <QuoteHiabServiceInquiryPage />;
}
