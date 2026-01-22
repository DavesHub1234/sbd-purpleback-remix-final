import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogArticle1 = () => {
  return (
    <div className="min-h-screen bg-stone-200">
      <SEO
        title="Why Choose Studios by Dave Over the Local Competition? | Studios by Dave Blog"
        description="A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC. Learn what makes Studios by Dave different from other local options."
        keywords="Shelby NC web design, local web designer, branding Shelby NC, SEO Cleveland County, Studios by Dave"
        canonical="https://studiosbydave.com/blog/why-choose-studios-by-dave"
      />
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-8 font-serif transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Newspaper Article Container */}
          <article 
            className="relative overflow-hidden"
            style={{
              background: `
                linear-gradient(180deg, 
                  #f5f0e8 0%, 
                  #ebe5da 30%,
                  #e8e2d6 70%,
                  #e0d9cc 100%
                )
              `,
              boxShadow: `
                0 2px 20px rgba(0, 0, 0, 0.15),
                0 10px 40px rgba(0, 0, 0, 0.1)
              `,
            }}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Top Date Bar */}
            <div className="relative z-10 bg-stone-800 text-stone-100 py-1.5 px-4 md:px-8">
              <div className="flex justify-between items-center text-[10px] md:text-xs font-serif tracking-wide">
                <span>SUNDAY, JANUARY 19, 2025</span>
                <span className="hidden md:block">SHELBY, NORTH CAROLINA</span>
                <span>PRICE: FREE</span>
              </div>
            </div>

            {/* Masthead */}
            <div className="relative z-10 border-b-2 border-stone-800 px-4 md:px-8 py-4">
              <h2 
                className="text-center font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-stone-900"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                THE STUDIOS CHRONICLE
              </h2>
              <div className="flex justify-center items-center gap-4 mt-2 text-[10px] md:text-xs text-stone-600 font-serif">
                <span>VOL. CXXIII</span>
                <span className="text-stone-400">•</span>
                <span>No. 1</span>
                <span className="text-stone-400">•</span>
                <span>ESTABLISHED 2024</span>
              </div>
            </div>

            {/* Section Headers Row */}
            <div className="relative z-10 grid grid-cols-3 border-b border-stone-400 text-center text-[10px] md:text-xs font-serif font-bold tracking-widest text-stone-700 bg-stone-100/50">
              <div className="py-2 border-r border-stone-400">BUSINESS</div>
              <div className="py-2 border-r border-stone-400">EDITORIAL</div>
              <div className="py-2">LOCAL NEWS</div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 p-4 md:p-8">
              {/* Main Headline */}
              <header className="border-b-4 border-double border-stone-800 pb-4 mb-6">
                <div className="text-center">
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-stone-500 font-serif mb-2">
                    — EXCLUSIVE REPORT —
                  </p>
                  <h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-3"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    Why Choose Studios by Dave<br className="hidden md:block" /> Over the Local Competition?
                  </h1>
                  <p className="text-sm md:text-lg text-stone-700 font-serif italic max-w-2xl mx-auto">
                    A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC
                  </p>
                </div>
              </header>

              {/* Article Body - Multi Column */}
              <div className="md:grid md:grid-cols-12 md:gap-6">
                {/* Main Article - 8 columns */}
                <div className="md:col-span-8 border-r-0 md:border-r border-stone-300 md:pr-6">
                  {/* Drop Cap Lead */}
                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-4 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    <span className="float-left text-6xl md:text-7xl font-bold leading-none mr-2 mt-1 text-stone-900" style={{ fontFamily: "Georgia, serif" }}>B</span>
                    uilding Strong Local Businesses Starts with a Strong Online Presence. In today's digital-first world, your website and online presence are often the first impression customers have of your business. For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.
                  </p>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-4 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    At Studios by Dave, we don't just build websites. We help local businesses stand out, compete, and grow in an increasingly crowded online marketplace.
                  </p>

                  {/* Two Column Section */}
                  <div className="md:columns-2 md:gap-6 text-sm leading-relaxed text-stone-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    {/* Section 1 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        1. We're Local — and That Matters
                      </h3>
                      <p className="text-justify mb-2">
                        Unlike large agencies or out-of-town freelancers, Studios by Dave understands the Shelby market. We know how customers search for local services, what local competitors are doing online, and how to optimize for Shelby, Cleveland County, and surrounding areas.
                      </p>
                      <p className="text-justify">
                        Being local means better communication, faster support, and strategies that actually make sense for your community.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        2. Custom Web Design — Not Templates
                      </h3>
                      <p className="text-justify mb-2">
                        Your business is unique. Your website should be too. Studios by Dave specializes in custom-designed websites tailored to your brand, mobile-friendly layouts that look great on any device, and clean, modern designs built for speed and usability.
                      </p>
                      <p className="text-justify">
                        We don't rely on cookie-cutter templates that make your business blend in. Instead, we create websites designed to convert visitors into customers.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        3. Branding & Logos That Build Trust
                      </h3>
                      <p className="text-justify mb-2">
                        First impressions matter — especially online. Whether you're starting a new business or refreshing an existing brand, we help with professional logo design, brand consistency across your website and online platforms, and visual identity that builds credibility.
                      </p>
                      <p className="text-justify">
                        A strong brand helps customers feel confident choosing you over competitors.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        4. We Care About Long-Term Success
                      </h3>
                      <p className="text-justify mb-2">
                        Your website isn't a "set it and forget it" project. We work with local businesses to improve and update their site over time, adjust SEO strategies as competition changes, and grow alongside their business goals.
                      </p>
                      <p className="text-justify">
                        When your business succeeds, our reputation grows with it — and that's how we like it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar - 4 columns */}
                <div className="md:col-span-4 mt-6 md:mt-0">
                  {/* Opinion Box */}
                  <div className="border-2 border-stone-800 bg-stone-100/80 mb-4">
                    <div className="bg-stone-800 text-stone-100 py-1 px-3 text-center">
                      <span className="text-xs font-bold tracking-widest uppercase">OPINION</span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-sm text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        The Digital Divide in Local Business
                      </h4>
                      <p className="text-xs text-stone-700 leading-relaxed text-justify" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Too many local businesses are invisible online. In an age where 97% of consumers search the internet for local services, having no web presence is like having no sign on your door.
                      </p>
                    </div>
                  </div>

                  {/* Letters Box */}
                  <div className="border border-stone-400 bg-stone-50/50">
                    <div className="border-b border-stone-400 py-1 px-3 text-center bg-stone-200/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">Letters to the Editor</span>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-stone-700 italic mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        "Studios by Dave transformed our online presence. Our calls have doubled since the new website launched."
                      </p>
                      <p className="text-[10px] text-stone-500 text-right">
                        — Local Business Owner, Shelby NC
                      </p>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="border-4 border-double border-stone-800 p-4 mt-4 bg-stone-100/90 text-center">
                    <h4 className="font-black text-lg text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      READY TO STAND OUT?
                    </h4>
                    <p className="text-xs text-stone-700 mb-3" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Contact Studios by Dave for professional web design, branding, and SEO services.
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-block bg-stone-800 text-stone-100 px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-stone-700 transition-colors"
                    >
                      Get Started Today
                    </Link>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-stone-700 mt-8 pt-4 text-center">
                <p className="text-stone-600 italic font-serif text-xs mb-1">
                  Proudly serving Shelby, NC and surrounding communities
                </p>
                <p className="text-stone-900 font-semibold font-serif text-xs">
                  🌐 Visit: <a href="https://www.studiosbydave.com" className="underline hover:text-stone-600 transition-colors">www.studiosbydave.com</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle1;
