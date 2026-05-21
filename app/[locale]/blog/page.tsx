import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/common/PageHero";
import { BlogList } from "@/components/pages/blog/BlogList";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";
import { getBlogPosts } from "@/lib/mock-blog-data";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const t = await getTranslations("navMenu.resources");
  const posts = await getBlogPosts();

  return (
    <main>
      <PageHero 
        title={t("blog")}
        description="Expert insights into heavy transport, machinery rental, and industrial logistics solutions across Saudi Arabia."
        label="Industrial Insights"
        centered={true}
      />
      <BlogList posts={posts} />
      <HomeCTA />
    </main>
  );
}
