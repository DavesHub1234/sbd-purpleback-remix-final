import watermarkOptimized from "@/assets/watermark-optimized.webp";

const Watermark = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-30 pointer-events-none">
      <img 
        src={watermarkOptimized}
        alt="Watermark" 
        className="w-12 h-12 object-contain"
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Watermark;