import biplaneImage from "@/assets/biplane-banner.png";

const PromotionMarquee = () => {
  return (
    <div className="w-full bg-gradient-to-r from-accent via-primary to-accent py-6 overflow-hidden relative">
      <div className="animate-[marquee_25s_linear_infinite]">
        <div className="flex items-center gap-12 whitespace-nowrap">
          {/* Repeat the content multiple times for seamless loop */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="relative flex items-center">
                <img 
                  src={biplaneImage} 
                  alt="Promotional bi-plane banner" 
                  className="h-24 w-auto"
                />
                <div className="absolute left-32 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 px-12 py-4 rounded-lg shadow-elegant border-2 border-yellow-600 transform -skew-x-6">
                  <p className="text-2xl font-bold text-primary whitespace-nowrap transform skew-x-6">
                    🎉 FREE Logo Design with any Web Pack! 💰 Unlimited $100 Referral Bonus!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};

export default PromotionMarquee;
