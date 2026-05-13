import { MOCK_BLOG_POSTS } from "@/lib/mock-blog-data";
import { BlogPostDetails } from "@/components/pages/blog/BlogPostDetails";
import { HomeCTA } from "@/components/pages/home/sections/HomeCTA";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostDetails post={post} />
      <HomeCTA />
    </main>
  );
}
