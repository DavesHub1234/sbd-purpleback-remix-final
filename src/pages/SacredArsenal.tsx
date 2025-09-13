import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Book, Shield, Eye } from "lucide-react";

const SacredArsenal = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Sacred Arsenal - The 5G Defense Superscript by David P Richardson"
        description="Discover Sacred Arsenal, an extraordinary book exploring the mystical and technological realms. A compelling narrative that bridges ancient wisdom with modern understanding."
        keywords="Sacred Arsenal, David P Richardson, 5G Defense, spiritual technology, mystical book, defense superscript"
      />
      <Navigation />
      
      <main>
        {/* Hero Section with Book Cover */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl scale-105 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/sacred-arsenal-cover.jpg" 
                      alt="Sacred Arsenal book cover - The 5G Defense Superscript by David P Richardson"
                      className="w-full max-w-md h-auto rounded-lg shadow-lg"
                      width="400"
                      height="600"
                    />
                  </div>
                </div>
              </div>

              {/* Book Information */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                    <Book className="w-4 h-4 mr-2" />
                    New Release
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
                    Sacred Arsenal
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-semibold">
                    The 5G Defense Superscript
                  </h2>
                  <p className="text-lg text-muted-foreground mb-2">
                    by <span className="text-primary font-semibold">David P Richardson</span>
                  </p>
                </div>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  A groundbreaking exploration that weaves together ancient wisdom and modern technology, 
                  revealing the hidden connections between spiritual defense and the digital age.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <Button size="lg" className="text-lg px-8 py-6">
                    <Shield className="w-5 h-5 mr-2" />
                    Read Now
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Eye className="w-5 h-5 mr-2" />
                    Preview Chapter
                  </Button>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.8/5 from early readers)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Sacred Arsenal
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Defense Strategies</h3>
                    <p className="text-muted-foreground">
                      Comprehensive protection methods for the modern digital age
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Book className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Ancient Wisdom</h3>
                    <p className="text-muted-foreground">
                      Timeless principles adapted for contemporary challenges
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Hidden Truths</h3>
                    <p className="text-muted-foreground">
                      Revealing connections between technology and spirituality
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-0">
                  <h3 className="text-2xl font-bold mb-6 text-center">What You'll Discover</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">The intersection of ancient protective practices and modern technology</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Practical strategies for digital-age spiritual defense</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Hidden symbolism in technological advancement</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">The mystical properties of electromagnetic frequencies</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Sacred geometry in modern communication systems</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-muted-foreground">Building resilience in an interconnected world</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore the Sacred Arsenal?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of readers who have discovered the profound connections between ancient wisdom and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                <Book className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Eye className="w-5 h-5 mr-2" />
                Read Sample
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SacredArsenal;