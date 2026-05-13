import { setRequestLocale } from "next-intl/server";
import { ProjectPortHandlingProjectsPage } from "@/components/pages/projects/port-handling-projects/ProjectPortHandlingProjectsPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectPortHandlingProjectsPage />;
}
