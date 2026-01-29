import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogArticle2 = () => {
  return (
    <div className="min-h-screen bg-stone-200">
      <SEO
        title="Does Your Business Really Need a Website in 2026? | Studios by Dave Blog"
        description="Discover why most businesses still need a website in 2026, what role it plays in trust-building and discovery, and what happens if you skip it."
        keywords="do I need a website 2026, business website importance, website vs social media, web presence, Studios by Dave"
        canonical="https://studiosbydave.com/blog/does-your-business-need-a-website-2026"
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
                <span>No. 2</span>
                <span className="text-stone-400">•</span>
                <span>ESTABLISHED 2024</span>
              </div>
            </div>

            {/* Section Headers Row */}
            <div className="relative z-10 grid grid-cols-3 border-b border-stone-400 text-center text-[10px] md:text-xs font-serif font-bold tracking-widest text-stone-700 bg-stone-100/50">
              <div className="py-2 border-r border-stone-400">TECHNOLOGY</div>
              <div className="py-2 border-r border-stone-400">BUSINESS</div>
              <div className="py-2">DIGITAL STRATEGY</div>
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
                    Does Your Business Really Need<br className="hidden md:block" /> a Website in 2026?
                  </h1>
                  <p className="text-sm md:text-lg text-stone-700 font-serif italic max-w-2xl mx-auto">
                    And What Happens If You Don't
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
                    <span className="float-left text-6xl md:text-7xl font-bold leading-none mr-2 mt-1 text-stone-900" style={{ fontFamily: "Georgia, serif" }}>F</span>
                    or many years, "You need a website" was treated as unquestionable business advice—right up there with having a polished logo and a business card. But it's 2026 now. Social media platforms have become storefronts. AI assistants answer customer questions instantly. Marketplaces, apps, and directories promise to "replace" traditional websites altogether.
                  </p>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-4 text-justify font-bold"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    So the question is this: Does your business really need a website anymore?
                  </p>

                  <p 
                    className="text-sm md:text-base leading-relaxed text-stone-800 mb-4 text-justify"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    The short answer: Most businesses still do—but not for the reasons you might think. The long answer is where things get very interesting.
                  </p>

                  {/* Two Column Section */}
                  <div className="md:columns-2 md:gap-6 text-sm leading-relaxed text-stone-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    {/* Section 1 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        The Big Myth: "Social Media Replaced Websites"
                      </h3>
                      <p className="text-justify mb-2">
                        Many businesses today operate entirely on platforms like Instagram, TikTok, WhatsApp, LinkedIn, Etsy, or Google Business Profiles. And to be totally clear—that can sometimes work, especially in the early stages.
                      </p>
                      <p className="text-justify mb-2">
                        But here's the uncomfortable truth: <strong>You don't OWN those platforms. You're renting attention.</strong>
                      </p>
                      <p className="text-justify">
                        Algorithms change. Reach drops. Accounts get restricted, hacked, or shut down—sometimes without explanation. A business built entirely on a platform it doesn't control is always one policy update away from invisibility. A website is different. It's the only digital space that is fully yours.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        1. Your Business's Source of Truth
                      </h3>
                      <p className="text-justify mb-2">
                        When people hear about your business, the first thing they still do is Google you. Your website answers: Are you legit? What exactly does your business offer? Who are you for? How can I contact or do business with you?
                      </p>
                      <p className="text-justify">
                        Even customers who find you on social media often check your website before trusting you with their money. <strong>No website = unanswered questions.</strong>
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        2. Builds Trust Faster Than Any Platform
                      </h3>
                      <p className="text-justify mb-2">
                        A clean, clear website signals professionalism in a way social profiles can't always match. A business with a proper domain feels established. Pricing, policies, and contact details feel safer. Reviews, case studies, or portfolios feel more credible.
                      </p>
                      <p className="text-justify">
                        <strong>Trust is currency—and your website is your online vault.</strong>
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        3. It Works While You Sleep
                      </h3>
                      <p className="text-justify mb-2">
                        Your website doesn't need daily posting, trending sounds, or constant engagement. It can capture leads, book appointments, answer FAQs, sell products, and educate customers.
                      </p>
                      <p className="text-justify">
                        That's 24/7 value—without chasing social algorithms.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        4. It Future-Proofs Your Business
                      </h3>
                      <p className="text-justify mb-2">
                        Trends change very fast. Today it's short-form video. Tomorrow it might be AI search, voice assistants, or something entirely new. A website gives you a stable foundation that adapts as technology evolves.
                      </p>
                      <p className="text-justify">
                        Many AI search tools and assistants now pull information directly from business websites, not just social media posts. <strong>No website = fewer chances to be discovered in the AI-driven web.</strong>
                      </p>
                    </div>

                    {/* Section 6 */}
                    <div className="break-inside-avoid mb-4">
                      <h3 className="font-black text-base md:text-lg text-stone-900 border-b border-stone-400 pb-1 mb-2 uppercase tracking-wide">
                        What Happens Without a Website?
                      </h3>
                      <p className="text-justify mb-2">
                        Here's what typically happens over time: You lose credibility with higher-value clients. You rely more on paid ads or constant posting. You miss out on search and AI discovery. You struggle to clearly explain your overall value.
                      </p>
                      <p className="text-justify">
                        Not having a website doesn't kill a business overnight. <strong>It quietly limits its growth.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar - 4 columns */}
                <div className="md:col-span-4 mt-6 md:mt-0">
                  {/* Key Insight Box */}
                  <div className="border-2 border-stone-800 bg-stone-100/80 mb-4">
                    <div className="bg-stone-800 text-stone-100 py-1 px-3 text-center">
                      <span className="text-xs font-bold tracking-widest uppercase">KEY INSIGHT</span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-sm text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Can Any Business Skip a Website?
                      </h4>
                      <p className="text-xs text-stone-700 leading-relaxed text-justify mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        Yes, but only under specific conditions: You're testing an idea short-term, you rely entirely on referrals, you operate on a closed platform, or your business is a side hustle.
                      </p>
                      <p className="text-xs text-stone-700 leading-relaxed text-justify italic" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        But even then, "survive" is the key word—not scale.
                      </p>
                    </div>
                  </div>

                  {/* The New Rule Box */}
                  <div className="border border-stone-400 bg-stone-50/50 mb-4">
                    <div className="border-b border-stone-400 py-1 px-3 text-center bg-stone-200/50">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">The New Rule for 2026</span>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-stone-700 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        <strong>You don't need:</strong> A massive website, a complicated build, or dozens of pages.
                      </p>
                      <p className="text-xs text-stone-700 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        <strong>But you do need:</strong> A clear message, one place that explains what you do, and one place you fully control.
                      </p>
                      <p className="text-xs text-stone-700 italic" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                        The smartest businesses don't ask, "Do we need a website?" They ask, "What role should our website play?"
                      </p>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="border-4 border-double border-stone-800 p-4 bg-stone-100/90 text-center">
                    <h4 className="font-black text-lg text-stone-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      READY TO BUILD YOUR FOUNDATION?
                    </h4>
                    <p className="text-xs text-stone-700 mb-3" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Contact Studios by Dave for professional web design that works with your social platforms—not instead of them.
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

export default BlogArticle2;
