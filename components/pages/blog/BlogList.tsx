"use client";

import React, { useState, useMemo, useEffect } from "react";
import { BlogPost } from "@/lib/mock-blog-data";
import { Link } from "@/i18n/navigation";
import { Calendar, Clock, Search, Filter, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CmsImage } from "@/components/ui/CmsImage";
import { ListPagination, PUBLIC_PAGE_SIZE } from "@/components/ui/ListPagination";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    return Array.from(new Set(posts.map((post) => post.category))).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PUBLIC_PAGE_SIZE));

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * PUBLIC_PAGE_SIZE;
    return filteredPosts.slice(start, start + PUBLIC_PAGE_SIZE);
  }, [filteredPosts, page]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Search and Filter Section */}
        <div className="mb-20">
          <div className="bg-[var(--color-surface-soft)] rounded-sm p-6 lg:p-8 border border-black/5 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, insights, or updates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-black/5 rounded-sm focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors text-sm font-medium"
                />
              </div>
              <div className="w-full md:w-64 relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 bg-white border border-black/5 rounded-sm focus:outline-none focus:border-[var(--color-accent-gold)] appearance-none transition-colors text-sm font-medium"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {(searchTerm || selectedCategory) && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Active Filters:</span>
                {searchTerm && (
                  <span className="px-3 py-1 bg-[var(--color-accent-gold)]/10 text-[var(--color-primary-navy)] text-[10px] font-bold rounded-sm border border-[var(--color-accent-gold)]/20">
                    "{searchTerm}"
                  </span>
                )}
                {selectedCategory && (
                  <span className="px-3 py-1 bg-[var(--color-accent-gold)]/10 text-[var(--color-primary-navy)] text-[10px] font-bold rounded-sm border border-[var(--color-accent-gold)]/20">
                    {selectedCategory}
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                  className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors ml-2"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPosts.length > 0 ? (
            <>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              {paginatedPosts.map((post) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={post.slug}
                  className="group flex flex-col h-full bg-white border border-black/5 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    {/* Image Area */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <CmsImage
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--color-primary-navy)] text-white text-[9px] font-black uppercase tracking-widest shadow-xl">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3 text-[var(--color-accent-gold)]" />
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3 text-[var(--color-accent-gold)]" />
                            {post.readingTime}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors leading-tight mb-4 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-[var(--color-surface-soft)] border border-black/5 flex items-center justify-center text-[var(--color-primary-navy)] text-[10px] font-black uppercase">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-[10px] font-bold text-[var(--color-primary-navy)] uppercase tracking-widest">
                            {post.author}
                          </span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-[var(--color-surface-soft)] flex items-center justify-center text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
            <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-[var(--color-surface-soft)] rounded-sm border border-black/5"
            >
              <h3 className="text-2xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight mb-4">No insights found</h3>
              <p className="text-gray-500 font-medium mb-8">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
                className="px-8 py-4 bg-[var(--color-primary-navy)] text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
