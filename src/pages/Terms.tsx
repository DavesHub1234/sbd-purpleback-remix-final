import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service - StudiosbyDave"
        description="Terms of Service for StudiosbyDave. Review our terms and conditions for web design, SEO, AI automation, and digital marketing services."
        noindex={true}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/53e3faf8-91ca-4a91-841b-36561dcb91f1-optimized.jpg" 
                alt="StudiosbyDave Logo" 
                className="h-20 w-auto"
                width="96"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
              Terms of{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Acceptance of Terms</h2>
              <p className="text-foreground/80 mb-6">
                By accessing and using StudiosbyDave services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Services Provided</h2>
              <p className="text-foreground/80 mb-6">
                StudiosbyDave provides web design, branding, AI automation, and digital marketing services. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Payment Terms</h2>
              <p className="text-foreground/80 mb-6">
                Payment terms will be specified in individual service agreements. All fees are non-refundable 
                unless otherwise stated. Late payments may result in service suspension and additional fees.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Intellectual Property</h2>
              <p className="text-foreground/80 mb-6">
                Upon full payment, clients receive ownership of custom work created specifically for them. 
                StudiosbyDave retains rights to general methodologies, techniques, and pre-existing intellectual property.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Client Responsibilities</h2>
              <p className="text-foreground/80 mb-6">
                Clients are responsible for providing accurate information, timely feedback, and necessary 
                materials for project completion. Delays caused by client inaction may result in project 
                timeline adjustments.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-foreground/80 mb-6">
                StudiosbyDave shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Termination</h2>
              <p className="text-foreground/80 mb-6">
                Either party may terminate services with written notice. Upon termination, all outstanding 
                fees become immediately due and payable.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-foreground/80 mb-6">
                For questions regarding these terms, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold text-foreground">StudiosbyDave</p>
                <p className="text-foreground/80">Email: dx1creations25@gmail.com</p>
                <p className="text-foreground/80">Phone: (704) 473-8188</p>
                <p className="text-foreground/80">Address: 125 S. Toney Street Shelby, North Carolina</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;