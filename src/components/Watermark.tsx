const Watermark = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-30 pointer-events-none">
      <img 
        src="/lovable-uploads/02546e96-b12e-44fe-a4fd-f45b6a001adb.png" 
        alt="Watermark" 
        className="w-8 h-8 object-contain"
      />
    </div>
  );
};

export default Watermark;