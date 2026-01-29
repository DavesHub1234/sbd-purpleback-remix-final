import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogArticles = [
  {
    id: 2,
    slug: "does-your-business-need-a-website-2026",
    title: "Does Your Business Really Need a Website in 2026?",
    subtitle: "And What Happens If You Don't",
    date: "January 2026",
    volume: "Vol. 1, No. 2",
    excerpt: "For many years, 'You need a website' was treated as unquestionable business advice. But it's 2026 now. Social media platforms have become storefronts. AI assistants answer questions instantly. So does your business really need a website anymore?",
  },
  {
    id: 1,
    slug: "why-choose-studios-by-dave",
    title: "Why Choose Studios by Dave Over the Local Competition?",
    subtitle: "A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC",
    date: "January 2025",
    volume: "Vol. 1, No. 1",
    excerpt: "In today's digital-first world, your website and online presence are often the first impression customers have of your business. For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <SEO
        title="Blog | Studios by Dave"
        description="Expert insights, tips, and industry news from Studios by Dave. Web design, branding, SEO, and digital marketing content for contractors and local businesses in Shelby, NC."
        keywords="contractor blog, web design tips, SEO insights, digital marketing news, branding advice, Shelby NC"
        canonical="https://studiosbydave.com/blog"
      />
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Newspaper Masthead */}
          <header className="text-center mb-12 border-b-4 border-double border-neutral-900 pb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-serif mb-2">
              Est. 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 font-serif tracking-tight">
              The Studios Chronicle
            </h1>
            <p className="text-lg text-neutral-600 font-serif italic mt-4">
              Insights, Tips & Stories for Local Business Success
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mt-4 font-serif">
              <span>Shelby, North Carolina</span>
              <span className="w-1 h-1 bg-neutral-400 rounded-full" />
              <span>Digital Edition</span>
            </div>
          </header>

          {/* Articles Grid */}
          <div className="space-y-8">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block group"
              >
                <article className="bg-white border-2 border-neutral-900 p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-300">
                  {/* Article Header */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-serif mb-4 border-b border-neutral-200 pb-4">
                    <span>{article.volume}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  {/* Article Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-serif mb-2 group-hover:underline decoration-2 underline-offset-4">
                    {article.title}
                  </h2>
                  <p className="text-lg text-neutral-600 font-serif italic mb-4">
                    {article.subtitle}
                  </p>
                  
                  {/* Excerpt */}
                  <p className="text-neutral-700 font-serif leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center gap-2 text-neutral-900 font-semibold font-serif group-hover:gap-3 transition-all">
                    <span>Continue Reading</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* More Articles Coming Soon */}
          <div className="mt-12 text-center border-t-2 border-neutral-300 pt-8">
            <p className="text-neutral-500 font-serif italic">
              More articles coming soon...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
