import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Book, Shield, Eye, Calendar, Award, Users } from "lucide-react";

const BookReleaseSacredArsenal = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Book Release - Sacred Arsenal: The 5G Defense Superscript"
        description="Official book release of Sacred Arsenal by David P Richardson. A revolutionary exploration of ancient wisdom meeting modern technology in the digital age."
        keywords="Sacred Arsenal book release, David P Richardson, 5G Defense Superscript, new book launch, spiritual technology"
      />
      <Navigation />
      
      <main>
        {/* Book Release Hero */}
        <section className="relative bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6 text-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                New Book Release
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Book Release
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
                Sacred Arsenal
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The highly anticipated release that bridges ancient wisdom with cutting-edge technology
              </p>
            </div>

            {/* Main Book Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Book Cover - Large and Prominent */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl scale-110 opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/sacred-arsenal-cover.jpg" 
                      alt="Sacred Arsenal book cover - The 5G Defense Superscript by David P Richardson"
                      className="w-full max-w-lg h-auto rounded-2xl shadow-xl"
                      width="500"
                      height="750"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-green-500 text-white">
                        Available Now
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="text-center lg:text-left space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Sacred Arsenal
                  </h3>
                  <h4 className="text-2xl md:text-3xl text-accent font-semibold mb-4">
                    The 5G Defense Superscript
                  </h4>
                  <p className="text-xl text-muted-foreground mb-6">
                    by <span className="text-primary font-bold">David P Richardson</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    "A masterpiece that unveils the hidden connections between ancient spiritual practices 
                    and modern electromagnetic technology. This groundbreaking work offers practical 
                    strategies for navigating the digital age while maintaining spiritual integrity."
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Defense Strategies</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Book className="w-5 h-5 text-accent mr-3" />
                    <span className="text-muted-foreground">Ancient Wisdom</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Eye className="w-5 h-5 text-secondary mr-3" />
                    <span className="text-muted-foreground">Hidden Truths</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <Award className="w-5 h-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Revolutionary Insights</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-lg">(4.9/5 from early readers)</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                  <Button size="lg" className="text-lg px-10 py-6">
                    <Book className="w-5 h-5 mr-2" />
                    Get Your Copy
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6">
                    <Eye className="w-5 h-5 mr-2" />
                    Read Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Release Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About This Release
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">Release Date</h3>
                    <p className="text-muted-foreground text-lg">
                      Available now across all major platforms
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Users className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">Early Reviews</h3>
                    <p className="text-muted-foreground text-lg">
                      Overwhelming positive response from beta readers
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">Recognition</h3>
                    <p className="text-muted-foreground text-lg">
                      Featured in spiritual technology publications
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* What Readers Are Saying */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-0">
                  <h3 className="text-2xl font-bold mb-8 text-center">What Readers Are Saying</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4">
                        "This book completely changed my perspective on technology and spirituality. 
                        Richardson's insights are both profound and practical."
                      </p>
                      <p className="text-sm font-semibold">- Sarah M., Tech Professional</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4">
                        "A masterwork that bridges ancient wisdom with modern understanding. 
                        Essential reading for anyone navigating our digital world."
                      </p>
                      <p className="text-sm font-semibold">- Dr. James K., Researcher</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't Miss This Revolutionary Release
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join thousands of readers discovering the profound connections between ancient wisdom 
              and modern technology. Your journey into the Sacred Arsenal begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" size="lg" className="text-xl px-12 py-8">
                <Book className="w-6 h-6 mr-3" />
                Order Sacred Arsenal
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Eye className="w-6 h-6 mr-3" />
                Read Free Chapter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookReleaseSacredArsenal;