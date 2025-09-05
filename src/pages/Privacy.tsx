import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - StudiosbyDave"
        description="Privacy Policy for StudiosbyDave. Learn how we collect, use, and protect your personal information when you use our web design and digital marketing services."
        noindex={true}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/6f340fde-df82-49e6-8e98-735c38a18099.png" 
                alt="StudiosbyDave Logo" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
              Privacy{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
              <p className="text-foreground/80 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                request services, or contact us for support. This may include your name, email address, 
                phone number, and business information.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <p className="text-foreground/80 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and comply with legal obligations. We do not sell or rent 
                your personal information to third parties.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Information Sharing</h2>
              <p className="text-foreground/80 mb-6">
                We may share your information in certain limited circumstances, such as with your 
                consent, to comply with legal requirements, or to protect our rights and the rights of others.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Data Security</h2>
              <p className="text-foreground/80 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights</h2>
              <p className="text-foreground/80 mb-6">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. To exercise these rights, please contact us 
                using the information provided below.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-foreground/80 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold text-foreground">StudiosbyDave</p>
                <p className="text-foreground/80">Email: davidrichardson@studiosbydave.com</p>
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

export default Privacy;