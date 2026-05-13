import { setRequestLocale } from "next-intl/server";
import { CareersApplyOnlinePage } from "@/components/pages/careers/apply-online/CareersApplyOnlinePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersApplyOnlinePage />;
}
