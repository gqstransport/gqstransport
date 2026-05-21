import fs from "fs";
import path from "path";
import { apiUrl } from "./api";

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

async function loadBlogPostsFromFile(): Promise<BlogPost[]> {
  const dataFile = path.join(process.cwd(), "data", "blogs.json");
  if (!fs.existsSync(dataFile)) {
    return [];
  }
  const data = fs.readFileSync(dataFile, "utf8");
  const posts = JSON.parse(data) as BlogPost[];
  return filterPublished(posts);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(apiUrl("/api/blogs"), { cache: "no-store" });
    if (res.ok) {
      const posts = (await res.json()) as BlogPost[];
      return filterPublished(posts);
    }
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
  }

  try {
    return await loadBlogPostsFromFile();
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}
