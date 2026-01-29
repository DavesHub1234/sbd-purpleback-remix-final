import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogArticle3 = () => {
  return (
    <div className="min-h-screen bg-stone-200">
      <SEO
        title="5 Common Website Mistakes Costing Local Businesses Customers | Studios by Dave Blog"
        description="Discover the top website mistakes hurting local businesses and learn how to fix them. From slow loading speeds to poor mobile design, get expert tips from Studios by Dave."
        keywords="website mistakes, local business website, mobile responsive, local SEO, website speed, Shelby NC web design"
        canonical="https://studiosbydave.com/blog/website-mistakes-costing-customers"
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
                <span>WEDNESDAY, JANUARY 29, 2026</span>
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
                <span>No. 3</span>
                <span className="text-stone-400">•</span>
                <span>ESTABLISHED 2024</span>
              </div>
            </div>

            {/* Section Headers Row */}
            <div className="relative z-10 grid grid-cols-3 border-b border-stone-400 text-center text-[10px] md:text-xs font-serif font-bold tracking-widest text-stone-700 bg-stone-100/50">
              <div className="py-2 border-r border-stone-400">BUSINESS</div>
              <div className="py-2 border-r border-stone-400">TECHNOLOGY</div>
              <div className="py-2">LOCAL NEWS</div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 p-4 md:p-8">
              {/* Main Headline */}
              <header className="border-b-4 border-double border-stone-800 pb-4 mb-6">
                <div className="text-center">
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-stone-500 font-serif mb-2">
                    — SPECIAL INVESTIGATION —
                  </p>
                  <h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-3"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    5 Common Website Mistakes<br className="hidden md:block" /> Costing Local Businesses Customers
                  </h1>
                  <p className="text-sm md:text-lg text-stone-700 font-serif italic max-w-2xl mx-auto">
                    And How to Fix Them Before It's Too Late
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
                    <span className="float-left text-6xl md:text-7xl font-bold leading-none mr-2 mt-1 text-stone-900" style={{ fontFamily: "Georgia, serif" }}>Y</span>
                    our website is often the first impression a potential customer has of your business. But what happens when that first impression is a bad one? Every day, local businesses lose customers—not because of poor service or high prices—but because of easily fixable website mistakes.
                  </p>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-4 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    After working with dozens of local businesses in Shelby and Cleveland County, we've identified the five most common website problems that drive customers away—and the good news is, every single one of them can be fixed.
                  </p>

                  {/* Two Column Section */}
                  <div className="md:columns-2 md:gap-6 text-sm leading-relaxed text-stone-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    {/* Mistake 1 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        1. Slow Loading Speeds
                      </h3>
                      <p className="text-justify mb-2">
                        In 2026, patience is in short supply. Studies show that 53% of mobile users abandon a site that takes longer than 3 seconds to load. If your website is sluggish, customers aren't waiting—they're clicking over to your competitor.
                      </p>
                      <p className="text-justify font-semibold">
                        The Fix: Optimize images, use modern hosting, and eliminate bloated code. A fast website isn't a luxury—it's a necessity.
                      </p>
                    </div>

                    {/* Mistake 2 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        2. Missing Contact Information
                      </h3>
                      <p className="text-justify mb-2">
                        You'd be surprised how many websites make it nearly impossible to find a phone number or email address. If a customer has to hunt for your contact info, they'll give up and call someone else.
                      </p>
                      <p className="text-justify font-semibold">
                        The Fix: Put your phone number and email in the header. Add a clear "Contact Us" button that's visible on every page.
                      </p>
                    </div>

                    {/* Mistake 3 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        3. Not Mobile-Responsive
                      </h3>
                      <p className="text-justify mb-2">
                        Over 60% of web traffic now comes from mobile devices. If your website looks broken, cramped, or impossible to navigate on a phone, you're losing the majority of your potential customers before they even see what you offer.
                      </p>
                      <p className="text-justify font-semibold">
                        The Fix: Your website must look and function beautifully on screens of all sizes. Period.
                      </p>
                    </div>

                    {/* Mistake 4 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        4. Ignoring Local SEO
                      </h3>
                      <p className="text-justify mb-2">
                        If your website doesn't mention your city, service areas, or local keywords, Google doesn't know where to show your business. And if you haven't claimed or optimized your Google Business Profile, you're invisible on Maps.
                      </p>
                      <p className="text-justify font-semibold">
                        The Fix: Add location-specific content, claim your Google Business Profile, and build local citations. Show up where your customers are searching.
                      </p>
                    </div>

                    {/* Mistake 5 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        5. Outdated Design
                      </h3>
                      <p className="text-justify mb-2">
                        Design trends evolve, and customers notice. An outdated website with clunky layouts, tiny fonts, or early-2000s clip art signals that your business might be behind the times—even if your services are top-notch.
                      </p>
                      <p className="text-justify font-semibold">
                        The Fix: A modern, clean design builds trust instantly. It tells customers you care about quality in everything you do.
                      </p>
                    </div>

                    {/* Conclusion */}
                    <div className="break-inside-avoid mb-4 border-t border-stone-400 pt-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 mb-2 uppercase tracking-wide">
                        The Bottom Line
                      </h3>
                      <p className="text-justify mb-2">
                        These mistakes aren't just inconveniences—they're actively costing you money. Every slow page load, every hidden phone number, every pinch-to-zoom moment on mobile is a customer walking out the door.
                      </p>
                      <p className="text-justify">
                        The good news? These problems are all solvable. And fixing them doesn't just stop the bleeding—it turns your website into a 24/7 sales tool that works as hard as you do.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar - 4 columns */}
                <div className="md:col-span-4 mt-6 md:mt-0">
                  {/* Stats Box */}
                  <div className="border-2 border-stone-800 bg-stone-100/80 mb-4">
                    <div className="bg-stone-800 text-stone-100 py-1 px-3 text-center">
                      <span className="text-xs font-bold tracking-widest uppercase">By The Numbers</span>
                    </div>
                    <div className="p-3 space-y-3">
                      <div className="text-center border-b border-stone-300 pb-2">
                        <p className="text-2xl font-black text-stone-900">53%</p>
                        <p className="text-xs text-stone-600">of users leave slow sites</p>
                      </div>
                      <div className="text-center border-b border-stone-300 pb-2">
                        <p className="text-2xl font-black text-stone-900">60%+</p>
                        <p className="text-xs text-stone-600">of traffic is mobile</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-black text-stone-900">3 sec</p>
                        <p className="text-xs text-stone-600">max acceptable load time</p>
                      </div>
                    </div>
                  </div>

                  {/* Checklist Box */}
                  <div className="border border-stone-400 bg-stone-50/50 mb-4">
                    <div className="border-b border-stone-400 py-1 px-3 text-center bg-stone-200/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">Quick Checklist</span>
                    </div>
                    <div className="p-3 text-xs" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      <ul className="space-y-2 text-stone-700">
                        <li>☐ Site loads in under 3 seconds</li>
                        <li>☐ Phone/email visible on all pages</li>
                        <li>☐ Works perfectly on mobile</li>
                        <li>☐ Google Business Profile claimed</li>
                        <li>☐ Design updated in last 3 years</li>
                      </ul>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="border-4 border-double border-stone-800 p-4 bg-stone-100/90 text-center">
                    <h4 className="font-black text-lg text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      FREE WEBSITE AUDIT
                    </h4>
                    <p className="text-xs text-stone-700 mb-3" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Not sure if your website is making these mistakes? Let us take a look—no strings attached.
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-block bg-stone-800 text-stone-100 px-4 py-2 text-xs font-bold tracking-wide uppercase hover:bg-stone-700 transition-colors"
                    >
                      Request Your Audit
                    </Link>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-stone-700 mt-8 pt-4 text-center">
                <p className="text-stone-600 italic font-serif text-xs mb-1">
                  Helping Shelby businesses build better websites since 2024
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

export default BlogArticle3;
