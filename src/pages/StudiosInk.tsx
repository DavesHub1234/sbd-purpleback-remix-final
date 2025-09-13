import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, User, Star, Feather } from "lucide-react";

const StudiosInk = () => {
  const services = [
    {
      title: "Sacred Arsenal",
      description: "The 5G Defense Superscript - A groundbreaking exploration of ancient wisdom and modern technology",
      icon: Book,
      path: "/studiosink/sacred-arsenal",
      features: ["Featured Release", "Defense Strategies", "Ancient Wisdom", "Hidden Connections"]
    },
    {
      title: "Book Showcase",
      description: "Explore our published works and literary collections",
      icon: Book,
      path: "/studiosink/books", 
      features: ["Published Works", "Genre Collections", "Book Previews", "Publication Timeline"]
    },
    {
      title: "Author Bio", 
      description: "Meet the creative mind behind the words and stories",
      icon: User,
      path: "/studiosink/author",
      features: ["Writing Journey", "Creative Process", "Inspirations", "Personal Story"]
    },
    {
      title: "Book Reviews",
      description: "Discover what readers and critics are saying about our books",
      icon: Star,
      path: "/studiosink/reviews", 
      features: ["Reader Reviews", "Critical Acclaim", "Testimonials", "Book Ratings"]
    },
    {
      title: "Writing Process",
      description: "Behind the scenes look at the creative journey from idea to book",
      icon: Feather,
      path: "/studiosink/process",
      features: ["Creative Insights", "Writing Tips", "Development Process", "Publishing Journey"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="StudiosInk - Literary Works & Creative Storytelling"
        description="Discover captivating books, explore the author's creative journey, and dive into the world of literary storytelling. From published works to the writing process behind each story."
        keywords="books, author, literary works, creative writing, storytelling, published books, book reviews, writing process"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              StudiosInk
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Where words come alive and stories find their voice. Explore our literary world 
              filled with captivating narratives and creative storytelling.
            </p>
            <Link to="/studiosink/sacred-arsenal">
              <Button size="lg" className="text-lg px-8 py-6">
                Discover Sacred Arsenal
              </Button>
            </Link>
          </div>
        </section>

        {/* Sacred Arsenal - Always Visible */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Sacred Arsenal
                </h2>
                <p className="text-xl text-muted-foreground mb-4">The 5G Defense Superscript</p>
                <p className="text-lg text-muted-foreground">by David P Richardson</p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-2xl scale-105 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <Link to="/studiosink/sacred-arsenal" className="block relative">
                      <img 
                        src="/sacred-arsenal-cover.jpg" 
                        alt="Sacred Arsenal book cover - The 5G Defense Superscript by David P Richardson"
                        className="w-full max-w-sm h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                        width="400"
                        height="600"
                      />
                    </Link>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A groundbreaking exploration that weaves together ancient wisdom and modern technology, 
                    revealing the hidden connections between spiritual defense and the digital age. Discover 
                    the mystical properties of electromagnetic frequencies and the sacred geometry in modern 
                    communication systems.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Defense Strategies</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Ancient Wisdom</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Hidden Connections</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">Spiritual Technology</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link to="/studiosink/sacred-arsenal">
                      <Button size="lg" className="text-lg px-8 py-6">
                        Explore This Book
                      </Button>
                    </Link>
                    <Link to="/studiosink/book-release-sacred-arsenal">
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                        Book Release Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Literary Showcase
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive into our collection of stories, meet the author, and discover the creative process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to={service.path}>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dive Into Our Stories?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discover captivating narratives and explore the creative journey behind each book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/studiosink/books">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Browse Books
                </Button>
              </Link>
              <Link to="/studiosink/author">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Meet the Author
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudiosInk;