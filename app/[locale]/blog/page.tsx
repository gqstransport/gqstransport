import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/common/PageHero";
import { BlogList } from "@/components/pages/blog/BlogList";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";

export default async function BlogPage() {
  const t = await getTranslations("navMenu.resources");

  return (
    <main>
      <PageHero 
        title={t("blog")}
        description="Expert insights into heavy transport, machinery rental, and industrial logistics solutions across Saudi Arabia."
        label="Industrial Insights"
        centered={true}
      />
      <BlogList />
      <HomeCTA />
    </main>
  );
}
