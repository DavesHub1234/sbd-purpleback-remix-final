import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Gift, Users, Clock, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Promos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Current Promotions | Studios by Dave - Free Logo Design & Referral Bonus"
        description="Take advantage of our current promotions: FREE Logo Design with any Web Pack purchase and Unlimited $100 Referral Bonuses. Limited time offers for contractors and local businesses."
        keywords="free logo design, referral bonus, web design promotion, contractor website deals, studios by dave promotions"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Limited Time Offers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Current <span className="text-primary">Promotions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of our exclusive offers designed to help your business grow. 
              Quality services with exceptional value.
            </p>
          </div>
        </section>

        {/* Free Logo Design Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 relative overflow-hidden">
                {/* Moving Reflection */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
                </div>
                {/* Pixie Dust Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-dust-float"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${Math.random() * 100}%`,
                        background: i % 3 === 0 
                          ? 'hsl(var(--trophy-gold))' 
                          : 'rgba(255, 255, 255, 0.6)',
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        boxShadow: i % 3 === 0 ? '0 0 4px hsl(var(--trophy-gold))' : '0 0 3px rgba(255,255,255,0.5)'
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Gift className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      FREE Logo Design
                    </h2>
                    <p className="text-white/90">With Any Web Pack Purchase</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Promotion Details</h3>
                    <p className="text-muted-foreground mb-6">
                      Receive a professionally designed custom logo at no additional cost when you purchase 
                      any of our comprehensive web package services. This offer is designed to provide you 
                      with a complete brand identity solution.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Custom logo design tailored to your business</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Multiple file formats for web and print use</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-foreground">Unlimited revisions until satisfaction</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Eligibility Requirements</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        This promotional offer is exclusively available to clients who purchase any qualifying web package service from Studios by Dave.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        The free logo design service will be initiated upon confirmation of web package purchase.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        This offer cannot be combined with other promotional discounts unless otherwise specified.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Unlimited Referral Bonus Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-accent/20 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-accent/80 p-6 relative overflow-hidden">
                {/* Moving Reflection */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" style={{ animationDelay: '1.5s' }} />
                </div>
                {/* Pixie Dust Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-dust-float"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${Math.random() * 100}%`,
                        background: i % 3 === 0 
                          ? 'hsl(var(--trophy-gold))' 
                          : 'rgba(255, 255, 255, 0.6)',
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        boxShadow: i % 3 === 0 ? '0 0 4px hsl(var(--trophy-gold))' : '0 0 3px rgba(255,255,255,0.5)'
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Unlimited $100 Referral Bonus
                    </h2>
                    <p className="text-white/90">No Limits. No Caps. Truly Unlimited.</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">How It Works</h3>
                    <p className="text-muted-foreground mb-6">
                      Earn $100 for every successful referral—with absolutely no limits on how many 
                      referrals you can make. Whether you refer one client or one hundred, you'll receive 
                      $100 for each qualifying referral.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">$100 per successful referral</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">Unlimited referrals—no maximum cap</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                        <span className="text-foreground">Referral bonus paid upon client purchase</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Payment Timeline
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Upon successful completion of a referred client's purchase of any qualifying service, 
                      the referral bonus shall be processed and disbursed according to the following terms:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Payment processing may occur as quickly as the same business day in certain circumstances.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Standard processing time is typically within one to fourteen (1-14) business days.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        Under no circumstances shall the payment period exceed fourteen (14) business days from the date of qualifying purchase confirmation.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Unlimited Emphasis */}
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20 text-center">
                  <h4 className="text-2xl font-bold text-accent mb-2">Truly Unlimited Earning Potential</h4>
                  <p className="text-muted-foreground">
                    There is no ceiling on your referral earnings. Refer as many clients as you wish—each 
                    qualifying referral earns you a $100 bonus. Your network is your earning potential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="py-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-2">Terms & Conditions</h2>
              <p className="text-sm text-muted-foreground">Please review the following terms applicable to our promotional offers.</p>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-4 leading-relaxed">
              <p>
                <strong className="text-foreground">General Terms:</strong> All promotional offers are subject to change or 
                discontinuation at the sole discretion of Studios by Dave without prior notice. Promotions are valid only 
                for new service agreements and cannot be applied retroactively to existing contracts or completed transactions.
              </p>
              
              <p>
                <strong className="text-foreground">Free Logo Design Promotion:</strong> The complimentary logo design offer 
                is exclusively available to clients who execute a binding agreement for any web package service offered by 
                Studios by Dave. The logo design service will commence upon receipt of full payment or execution of an approved 
                payment plan. Studios by Dave reserves the right to determine the scope and deliverables of the complimentary 
                logo design based on standard service offerings.
              </p>
              
              <p>
                <strong className="text-foreground">Referral Bonus Program:</strong> A qualifying referral is defined as a new 
                client who (a) has not previously engaged Studios by Dave for services, (b) explicitly identifies the referring 
                party at the time of initial consultation, and (c) completes a purchase of any qualifying service. Referral 
                bonuses are paid to the referring party and are subject to applicable tax reporting requirements. Studios by 
                Dave reserves the right to verify the legitimacy of all referral claims and may withhold payment pending 
                verification.
              </p>
              
              <p>
                <strong className="text-foreground">Limitation of Liability:</strong> Studios by Dave shall not be held liable 
                for any indirect, incidental, or consequential damages arising from participation in these promotional programs. 
                All services are provided "as is" and subject to the standard terms of service agreement.
              </p>
              
              <p>
                <strong className="text-foreground">Modification and Termination:</strong> Studios by Dave reserves the right to 
                modify, suspend, or terminate any promotional offer at any time without prior notice. In the event of 
                termination, any pending qualified referral bonuses will be honored according to the terms in effect at the 
                time of the qualifying referral.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                For complete terms, please review our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © {new Date().getFullYear()} Studios by Dave. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default Promos;
