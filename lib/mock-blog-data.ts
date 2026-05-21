import { fetchCmsJson } from "./cms-fetch";
import { sortByRecent } from "./sort";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readingTime: string;
  tags: string[];
  status?: string;
}

function filterPublished(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => !post.status || post.status === "Published");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await fetchCmsJson<BlogPost>("blogs");
    return sortByRecent(filterPublished(posts));
  } catch (error) {
    console.error("Error fetching blogs from CMS backend:", error);
    return [];
  }
}
