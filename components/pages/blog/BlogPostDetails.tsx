"use client";

import { BlogPost, MOCK_BLOG_POSTS } from "@/lib/mock-blog-data";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Calendar, User, ChevronLeft, Share2, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface Props {
  post: BlogPost;
}

export function BlogPostDetails({ post }: Props) {
  // Filter related posts (exclude current)
  const relatedPosts = MOCK_BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Navigation / Header Area */}
          <div className="mb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[var(--color-accent-gold)] transition-colors group mb-8">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> 
              Back to Insights
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[var(--color-accent-gold)]/10 text-[var(--color-primary-navy)] text-[10px] font-black uppercase tracking-widest border border-[var(--color-accent-gold)]/20">
                {post.category}
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Calendar className="h-3.5 w-3.5 text-[var(--color-accent-gold)]" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "2-digit", year: "numeric" })}
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Clock className="h-3.5 w-3.5 text-[var(--color-accent-gold)]" />
                {post.readingTime}
              </div>
            </div>

            <h1 className="text-4xl lg:text-7xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight leading-[0.95] mb-8 max-w-5xl">
              {post.title}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-4xl italic border-l-4 border-[var(--color-accent-gold)] pl-8 py-2">
              {post.excerpt}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Article Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                {/* Main Image */}
                <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl border border-black/5">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
                </div>

                {/* Rich Text Body */}
                <MarkdownRenderer 
                  content={post.content}
                  className="prose prose-lg max-w-none 
                    prose-headings:text-[var(--color-primary-navy)] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
                    prose-p:text-[var(--color-text-muted)] prose-p:leading-[1.8] prose-p:font-medium
                    prose-strong:text-[var(--color-primary-navy)] prose-strong:font-black
                    prose-h1:text-5xl prose-h1:mb-12
                    prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100
                    prose-h3:text-2xl prose-h3:mt-10
                    prose-blockquote:border-[var(--color-accent-gold)] prose-blockquote:bg-[var(--color-surface-soft)] prose-blockquote:p-8 prose-blockquote:rounded-sm
                    prose-li:text-[var(--color-text-muted)] prose-li:font-medium
                    prose-a:text-[var(--color-accent-gold)] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                    prose-table:border-collapse prose-table:w-full prose-th:bg-gray-50 prose-th:p-4 prose-td:p-4 prose-td:border-b prose-td:border-gray-50
                  "
                />

                {/* Article Footer Tags */}
                <div className="pt-16 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mr-2">Tags:</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100 rounded-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 sticky top-32">
              
              {/* Author Profile */}
              <div className="bg-[var(--color-surface-soft)] p-8 border border-black/5 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-black/5 pb-4">
                  Written By
                </h4>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)] flex items-center justify-center font-black text-xl border-2 border-white shadow-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-black text-[var(--color-primary-navy)] uppercase tracking-tight">{post.author}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">GQS Editorial Team</div>
                  </div>
                </div>
              </div>

              {/* Share Insight */}
              <div className="bg-white p-8 border border-black/5 rounded-sm shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
                  Share Insight
                </h4>
                <button 
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-3 py-4 border border-black/5 rounded-sm text-xs font-black uppercase tracking-widest text-[var(--color-primary-navy)] hover:bg-[var(--color-primary-navy)] hover:text-white transition-all group"
                >
                  <Share2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Copy Link to Share
                </button>
              </div>

              {/* Technical CTA */}
              <div className="bg-[var(--color-primary-navy)] p-10 rounded-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-gold)]/10 blur-3xl pointer-events-none" />
                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4 relative z-10">Need Industrial Support?</h4>
                <p className="text-white/60 text-sm mb-8 font-medium leading-relaxed relative z-10">
                  Our operations team is ready to assist with technical mobilization and equipment deployment across the GCC.
                </p>
                <Link href="/request-a-quote" className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all relative z-10">
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* RELATED BLOGS SECTION - MOVED BELOW */}
      {relatedPosts.length > 0 && (
        <section className="bg-[var(--color-surface-soft)] py-24 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[var(--color-accent-gold)] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Keep Reading</span>
                <h2 className="text-3xl lg:text-5xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">
                  Related Insights<span className="text-[var(--color-accent-gold)]">.</span>
                </h2>
              </div>
              <Link 
                href="/blog" 
                className="hidden md:inline-flex items-center gap-2 text-[var(--color-primary-navy)] font-black uppercase tracking-widest text-xs hover:text-[var(--color-accent-gold)] transition-colors group"
              >
                View All Insights
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {relatedPosts.map((rp) => (
                <article
                  key={rp.slug}
                  className="group flex flex-col h-full bg-white border border-black/5 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <Link href={`/blog/${rp.slug}`} className="flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image 
                        src={rp.image} 
                        alt={rp.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--color-primary-navy)] text-white text-[9px] font-black uppercase tracking-widest shadow-xl">
                          {rp.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-8 flex flex-col">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-[var(--color-accent-gold)]" />
                          {new Date(rp.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-[var(--color-accent-gold)]" />
                          {rp.readingTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors leading-tight mb-4 line-clamp-2">
                        {rp.title}
                      </h3>

                      <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3">
                        {rp.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[var(--color-primary-navy)] uppercase tracking-widest">
                          Read Article
                        </span>
                        <div className="h-10 w-10 rounded-full bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] group-hover:text-white transition-all">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
