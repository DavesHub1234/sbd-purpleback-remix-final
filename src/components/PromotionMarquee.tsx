const PromotionMarquee = () => {
  return (
    <div className="w-full bg-gradient-to-r from-accent via-primary to-accent py-4 overflow-hidden relative">
      <div className="animate-[marquee_20s_linear_infinite]">
        <div className="flex items-center gap-24 whitespace-nowrap">
          {/* Repeat the content multiple times for seamless loop */}
          {[...Array(4)].map((_, index) => (
            <p key={index} className="text-2xl md:text-3xl font-bold text-white">
              🎉 FREE Logo Design with any Web Pack! 💰 Unlimited $100 Referral Bonus!
            </p>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
};

export default PromotionMarquee;
