import { setRequestLocale } from "next-intl/server";
import { ProjectsPage } from "@/components/pages/projects/ProjectsPage";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsPage />;
}
