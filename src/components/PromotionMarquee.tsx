const PromotionMarquee = () => {
  return <div className="w-full bg-[linear-gradient(110deg,hsl(0_0%_75%)_0%,hsl(0_0%_90%)_25%,hsl(0_0%_95%)_50%,hsl(0_0%_90%)_75%,hsl(0_0%_75%)_100%)] py-4 overflow-hidden relative">
      <div className="animate-[marquee_20s_linear_infinite]">
        <div className="flex items-center gap-24 whitespace-nowrap">
          {/* Repeat the content multiple times for seamless loop */}
          {[...Array(4)].map((_, index) => <p key={index} className="text-2xl md:text-3xl font-bold text-foreground/90">
              🎉 FREE Logo Design with any Web Service! 💰 Unlimited $100 Referral Bonus!
            </p>)}
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
    </div>;
};
export default PromotionMarquee;