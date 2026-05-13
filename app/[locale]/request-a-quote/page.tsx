import { setRequestLocale } from "next-intl/server";
import { RequestAQuotePage } from "@/components/pages/request-a-quote/RequestAQuotePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RequestAQuotePage />;
}
