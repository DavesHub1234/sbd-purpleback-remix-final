import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const StudiosGear = () => {

  return (
    <div className="min-h-screen">
      <SEO
        title="Studios-Gear - Custom Apps & Projects"
        description="Explore custom applications, innovative projects, and digital tools. A showcase of custom-built solutions and creative technology projects."
        keywords="custom apps, projects, digital tools, software development, web applications, custom solutions, technology projects"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Studios-Gear
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Coming Soon - Custom apps and innovative projects
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
                We're building something exciting! Custom applications and innovative project solutions will be available here soon.
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

export default StudiosGear;