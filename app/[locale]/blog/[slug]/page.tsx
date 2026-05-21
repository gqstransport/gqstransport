import { getBlogPosts } from "@/lib/mock-blog-data";
import { BlogPostDetails } from "@/components/pages/blog/BlogPostDetails";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostDetails post={post} allPosts={posts} />
      <HomeCTA />
    </main>
  );
}
