import { BlogPost } from "@/lib/mock-blog-data";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Calendar, User, ChevronLeft, Share2, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/motion-reveal";

interface Props {
  post: BlogPost;
}

export function BlogPostDetails({ post }: Props) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Reveal direction="up">
              <div className="space-y-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-colors mb-4">
                  <ChevronLeft className="h-4 w-4" /> Back to Blog
                </Link>

                <div className="space-y-6">
                   <span className="inline-block px-4 py-1.5 rounded-sm bg-[var(--color-surface-soft)] text-[var(--color-primary-navy)] text-[10px] font-black uppercase tracking-widest border border-[var(--color-border)]">
                    {post.category}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest pt-4 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-2"><User className="h-4 w-4 text-[var(--color-accent-gold)]" /> By {post.author}</div>
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[var(--color-accent-gold)]" /> {post.date}</div>
                    <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-[var(--color-accent-gold)]" /> 0 Comments</div>
                  </div>
                </div>

                <div className="relative aspect-[16/9] rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-[var(--color-primary-navy)]
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium
                    prose-strong:text-[var(--color-primary-navy)]
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-xl
                    pt-12"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* Share Section */}
                <div className="pt-16 border-t border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-navy)]">Share Article:</span>
                      <div className="flex gap-2">
                        <button className="h-10 w-10 rounded-sm bg-gray-50 flex items-center justify-center hover:bg-[var(--color-accent-gold)] hover:text-white transition-colors">
                           <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Social Share Card */}
            <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm space-y-6">
               <h3 className="text-xs font-black text-[var(--color-primary-navy)] uppercase tracking-[0.2em] border-b border-gray-50 pb-4">
                 Share This Article
               </h3>
               <div className="grid grid-cols-3 gap-3">
                 <button className="flex flex-col items-center justify-center p-4 rounded-sm bg-gray-50 hover:bg-[#1877F2] hover:text-white transition-all duration-300 group">
                   <Share2 className="h-5 w-5 mb-2 group-hover:scale-110 transition-transform" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">Facebook</span>
                 </button>
                 <button className="flex flex-col items-center justify-center p-4 rounded-sm bg-gray-50 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group">
                   <Share2 className="h-5 w-5 mb-2 group-hover:scale-110 transition-transform" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">Twitter</span>
                 </button>
                 <button className="flex flex-col items-center justify-center p-4 rounded-sm bg-gray-50 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group">
                   <Share2 className="h-5 w-5 mb-2 group-hover:scale-110 transition-transform" />
                   <span className="text-[8px] font-bold uppercase tracking-widest">LinkedIn</span>
                 </button>
               </div>
            </div>

            {/* Lead Gen Box */}
            <div className="bg-[var(--color-primary-navy)] p-10 rounded-sm shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 gradient-line" />
               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Request a Consultation</h3>
               <p className="text-white/60 text-sm mb-8 font-medium leading-relaxed">
                 Have questions about heavy transport or machinery requirements? Our experts are here to help.
               </p>
               <Link href="/request-a-quote" className="inline-flex w-full items-center justify-center py-4 bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] font-black uppercase tracking-widest text-xs rounded-sm hover:brightness-105 transition-all active:scale-[0.98]">
                 Get a Technical Quote
               </Link>
            </div>

            {/* Newsletter */}
            <div className="p-10 bg-white border border-gray-100 rounded-sm shadow-sm space-y-6">
               <h3 className="text-xl font-black text-[var(--color-primary-navy)] uppercase tracking-tight">Stay Updated</h3>
               <p className="text-gray-500 text-sm font-medium">Subscribe for industrial logistics insights and safety protocols.</p>
               <form className="space-y-4">
                  <input type="email" placeholder="email@company.com" className="w-full bg-gray-50 border border-gray-100 rounded-sm py-4 px-4 text-xs focus:outline-none focus:border-[var(--color-accent-gold)] transition-colors" />
                  <button className="w-full py-4 bg-[var(--color-primary-navy)] text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-primary-navy)] transition-all">
                    Join Network
                  </button>
               </form>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
