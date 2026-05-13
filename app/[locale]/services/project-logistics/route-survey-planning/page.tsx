import { setRequestLocale } from "next-intl/server";
import { RouteSurveyPlanningPage } from "@/components/pages/services/project-logistics/route-survey-planning/RouteSurveyPlanningPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RouteSurveyPlanningPage />;
}
