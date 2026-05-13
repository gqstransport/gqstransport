import { MOCK_BLOG_POSTS } from "@/lib/mock-blog-data";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export function BlogList() {
  const [featured, ...others] = MOCK_BLOG_POSTS;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featured && (
          <Reveal direction="up">
            <Link href={`/blog/${featured.slug}`} className="group relative block mb-20 overflow-hidden rounded-sm bg-[var(--color-primary-navy)] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto h-[400px] lg:h-[600px] overflow-hidden">
                  <Image 
                    src={featured.image} 
                    alt={featured.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)] to-transparent opacity-60 lg:opacity-100" />
                  <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center space-y-6 relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-sm bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] text-[10px] font-black uppercase tracking-widest">
                    Featured Insight
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 text-lg font-medium leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-6 pt-4 text-white/40 text-xs font-bold uppercase tracking-widest border-t border-white/5">
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {featured.date}</div>
                    <div className="flex items-center gap-2"><User className="h-4 w-4" /> {featured.author}</div>
                  </div>
                  <div className="pt-8">
                    <span className="inline-flex items-center gap-3 text-[var(--color-accent-gold)] font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform duration-500">
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* List Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {others.map((post) => (
              <StaggerItem key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="group flex flex-col h-full bg-white rounded-sm border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-sm bg-[var(--color-primary-navy)] text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                       <Calendar className="h-3 w-3 text-[var(--color-accent-gold)]" /> 
                       {post.date}
                    </div>
                    
                    <h3 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight group-hover:text-[var(--color-accent-gold)] transition-colors leading-tight mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3 mb-8">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-navy)] flex items-center gap-2 group-hover:text-[var(--color-accent-gold)] transition-colors">
                        Read Article 
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-[var(--color-primary-navy)] group-hover:bg-[var(--color-accent-gold)] group-hover:text-white transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
