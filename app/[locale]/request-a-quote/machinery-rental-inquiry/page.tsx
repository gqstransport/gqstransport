import { setRequestLocale } from "next-intl/server";
import { QuoteMachineryRentalInquiryPage } from "@/components/pages/request-a-quote/machinery-rental-inquiry/QuoteMachineryRentalInquiryPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <QuoteMachineryRentalInquiryPage />;
}
