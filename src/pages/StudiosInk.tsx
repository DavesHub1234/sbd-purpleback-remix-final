import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const StudiosInk = () => {

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
              Studios-Ink
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Coming Soon - Exciting literary projects in development
            </p>
          </div>
        </section>


        {/* Coming Soon Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're working on something amazing! Literary projects and creative content will be available here soon.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudiosInk;