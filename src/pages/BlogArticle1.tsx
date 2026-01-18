import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogArticle1 = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <SEO
        title="Why Choose Studios by Dave Over the Local Competition? | Studios by Dave Blog"
        description="A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC. Learn what makes Studios by Dave different from other local options."
        keywords="Shelby NC web design, local web designer, branding Shelby NC, SEO Cleveland County, Studios by Dave"
        canonical="https://studiosbydave.com/blog/why-choose-studios-by-dave"
      />
      <Navigation />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 font-serif transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Newspaper Article Container with aged paper effect */}
          <article 
            className="relative p-6 md:p-10 lg:p-14"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(139, 119, 101, 0.08) 0%, 
                  rgba(194, 178, 158, 0.12) 25%,
                  rgba(218, 199, 175, 0.15) 50%,
                  rgba(194, 178, 158, 0.12) 75%,
                  rgba(139, 119, 101, 0.08) 100%
                ),
                linear-gradient(45deg,
                  #f5ebe0 0%,
                  #ede4d8 20%,
                  #f0e6d8 40%,
                  #e8dfd0 60%,
                  #f2e8dc 80%,
                  #eee4d6 100%
                )
              `,
              boxShadow: `
                inset 0 0 60px rgba(139, 119, 101, 0.15),
                inset 0 0 100px rgba(0, 0, 0, 0.03),
                0 4px 20px rgba(0, 0, 0, 0.15),
                0 8px 40px rgba(0, 0, 0, 0.1)
              `,
            }}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Crease/fold lines */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(90deg, 
                    transparent 0%, 
                    transparent 49.5%, 
                    rgba(139, 119, 101, 0.08) 49.5%, 
                    rgba(139, 119, 101, 0.08) 50.5%, 
                    transparent 50.5%, 
                    transparent 100%
                  ),
                  linear-gradient(0deg, 
                    transparent 0%, 
                    transparent 49.5%, 
                    rgba(139, 119, 101, 0.06) 49.5%, 
                    rgba(139, 119, 101, 0.06) 50.5%, 
                    transparent 50.5%, 
                    transparent 100%
                  )
                `,
              }}
            />

            {/* Edge wear/tear effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: `
                  inset 3px 3px 8px rgba(139, 119, 101, 0.1),
                  inset -3px -3px 8px rgba(139, 119, 101, 0.1),
                  inset 0 0 30px rgba(139, 119, 101, 0.05)
                `,
              }}
            />

            {/* Newspaper Header */}
            <header className="relative z-10 border-b-4 border-double border-neutral-800 pb-6 mb-8">
              <div className="text-center mb-4">
                <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 font-serif">
                  The Studios by Dave Chronicle
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mt-2 font-serif">
                  <span>Vol. 1, No. 1</span>
                  <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                  <span>January 2025</span>
                  <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                  <span>Shelby, NC</span>
                </div>
              </div>
              <div className="border-t border-b border-neutral-400 py-4 my-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 text-center font-serif leading-tight">
                  Why Choose Studios by Dave Over the Local Competition?
                </h1>
              </div>
              <p className="text-lg md:text-xl text-center text-neutral-700 font-serif italic">
                A Local Partner for Professional Web Design, Branding, and SEO in Shelby, NC
              </p>
            </header>

            {/* Article Content - Newspaper Style */}
            <div className="relative z-10 prose prose-neutral max-w-none font-serif text-neutral-800">
              {/* Lead Paragraph - Drop Cap */}
              <div className="border-b border-neutral-300 pb-6 mb-6">
                <p className="text-base leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:font-serif first-letter:text-neutral-900">
                  Building Strong Local Businesses Starts with a Strong Online Presence. In today's digital-first world, your website and online presence are often the first impression customers have of your business. For local businesses in Shelby, North Carolina and the surrounding areas, choosing the right digital partner can make the difference between being found — or being overlooked.
                </p>
                <p className="text-base leading-relaxed mt-4">
                  At Studios by Dave, we don't just build websites. We help local businesses stand out, compete, and grow in an increasingly crowded online marketplace.
                </p>
                <p className="text-base text-neutral-600 italic mt-4">
                  So what makes Studios by Dave different from other local options?
                </p>
              </div>

              {/* Multi Column Layout */}
              <div className="md:columns-2 lg:columns-3 md:gap-6 space-y-4 text-sm leading-relaxed">
                {/* Section 1 */}
                <div className="break-inside-avoid">
                  <h2 className="text-xl font-bold text-neutral-900 border-b-2 border-neutral-800 pb-1 mb-3 font-serif">
                    1. We're Local — and That Matters
                  </h2>
                  <p className="mb-3">
                    Unlike large agencies or out-of-town freelancers, Studios by Dave understands the Shelby market.
                  </p>
                  <p className="font-semibold mb-1">We know:</p>
                  <ul className="list-disc list-inside space-y-0.5 mb-3 pl-2 text-sm">
                    <li>How customers search for local services</li>
                    <li>What local competitors are doing online</li>
                    <li>How to optimize for Shelby, Cleveland County, and surrounding areas</li>
                  </ul>
                  <p>
                    Being local means better communication, faster support, and strategies that actually make sense for your community.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="break-inside-avoid mt-4">
                  <h2 className="text-xl font-bold text-neutral-900 border-b-2 border-neutral-800 pb-1 mb-3 font-serif">
                    2. Custom Web Design — Not Templates
                  </h2>
                  <p className="mb-3">
                    Your business is unique. Your website should be too.
                  </p>
                  <p className="font-semibold mb-1">Studios by Dave specializes in:</p>
                  <ul className="list-disc list-inside space-y-0.5 mb-3 pl-2 text-sm">
                    <li>Custom-designed websites tailored to your brand</li>
                    <li>Mobile-friendly layouts that look great on any device</li>
                    <li>Clean, modern designs built for speed and usability</li>
                  </ul>
                  <p>
                    We don't rely on cookie-cutter templates that make your business blend in. Instead, we create websites designed to convert visitors into customers.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="break-inside-avoid mt-4">
                  <h2 className="text-xl font-bold text-neutral-900 border-b-2 border-neutral-800 pb-1 mb-3 font-serif">
                    3. Branding & Logos That Build Trust
                  </h2>
                  <p className="mb-3">
                    First impressions matter — especially online.
                  </p>
                  <p className="font-semibold mb-1">Whether you're starting a new business or refreshing an existing brand, we help with:</p>
                  <ul className="list-disc list-inside space-y-0.5 mb-3 pl-2 text-sm">
                    <li>Professional logo design</li>
                    <li>Brand consistency across your website and online platforms</li>
                    <li>Visual identity that builds credibility and recognition</li>
                  </ul>
                  <p>
                    A strong brand helps customers feel confident choosing you over competitors.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="break-inside-avoid mt-4">
                  <h2 className="text-xl font-bold text-neutral-900 border-b-2 border-neutral-800 pb-1 mb-3 font-serif">
                    4. We Care About Long-Term Success
                  </h2>
                  <p className="mb-3">
                    Your website isn't a "set it and forget it" project.
                  </p>
                  <p className="font-semibold mb-1">We work with local businesses to:</p>
                  <ul className="list-disc list-inside space-y-0.5 mb-3 pl-2 text-sm">
                    <li>Improve and update their site over time</li>
                    <li>Adjust SEO strategies as competition changes</li>
                    <li>Grow alongside their business goals</li>
                  </ul>
                  <p>
                    When your business succeeds, our reputation grows with it — and that's how we like it.
                  </p>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="border-4 border-double border-neutral-800 p-6 mt-8 text-center bg-[#f8f3eb]">
                <h2 className="text-2xl font-bold text-neutral-900 font-serif mb-3">
                  Ready to Stand Out Online in Shelby, NC?
                </h2>
                <p className="text-neutral-700 mb-4 font-serif text-sm">
                  If you're a local business owner looking for:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="border border-neutral-400 p-2 bg-[#f0e8dc]">
                    <p className="text-xs font-semibold text-neutral-900">A professional website</p>
                  </div>
                  <div className="border border-neutral-400 p-2 bg-[#f0e8dc]">
                    <p className="text-xs font-semibold text-neutral-900">Strong branding</p>
                  </div>
                  <div className="border border-neutral-400 p-2 bg-[#f0e8dc]">
                    <p className="text-xs font-semibold text-neutral-900">Better visibility on Google</p>
                  </div>
                  <div className="border border-neutral-400 p-2 bg-[#f0e8dc]">
                    <p className="text-xs font-semibold text-neutral-900">A local partner who cares</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-neutral-900 font-serif">
                  Studios by Dave is here to help.
                </p>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-neutral-700 mt-8 pt-4 text-center">
                <p className="text-neutral-600 italic font-serif text-sm mb-2">
                  Proudly serving Shelby, NC and surrounding communities
                </p>
                <p className="text-neutral-900 font-semibold font-serif text-sm">
                  🌐 Visit: <a href="https://www.studiosbydave.com" className="underline hover:text-neutral-600 transition-colors">www.studiosbydave.com</a>
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
