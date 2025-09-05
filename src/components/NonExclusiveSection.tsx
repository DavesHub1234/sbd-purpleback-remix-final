import { Users, Heart, Handshake } from "lucide-react";

const NonExclusiveSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 text-primary">
              <Users size={32} />
              <Heart size={28} />
              <Handshake size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            We're a Non-Exclusive Agency
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At StudiosbyDave, we believe in building relationships, not restrictions. 
            We're proud to be a <span className="font-semibold text-primary">non-exclusive agency</span> that 
            welcomes and caters to anyone in need of our services. Whether you're a small startup, 
            an established business, or anywhere in between, we're here to help you succeed online.
          </p>
          
          <p className="text-base text-muted-foreground">
            Your success is our success - no exclusivity, just great results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NonExclusiveSection;