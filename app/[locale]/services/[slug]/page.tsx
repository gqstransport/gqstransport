import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getServiceBySlug, getAllSlugs } from "@/lib/services-data";
import { ServiceCategoryPage } from "@/components/pages/services/ServiceCategoryPage";
import { ServiceDetailPage } from "@/components/pages/services/ServiceDetailPage";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ["en", "ar"]; // Assuming these are the supported locales
  
  const params = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getServiceBySlug(slug);

  if (!result) return {};

  if (result.type === "category") {
    return {
      title: `${result.data.title} | GQS Saudi Arabia`,
      description: result.data.description,
    };
  }

  return {
    title: `${result.data.title} | ${result.category.title} | GQS`,
    description: result.data.description,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const result = getServiceBySlug(slug);

  if (!result) {
    notFound();
  }

  if (result.type === "category") {
    return <ServiceCategoryPage category={result.data} />;
  }

  return <ServiceDetailPage service={result.data} category={result.category} />;
}
