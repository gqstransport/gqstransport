import { setRequestLocale } from "next-intl/server";
import { ProjectIndustrialCargoMovementPage } from "@/components/pages/projects/industrial-cargo-movement/ProjectIndustrialCargoMovementPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectIndustrialCargoMovementPage />;
}
