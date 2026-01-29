import { useEffect } from "react";

const ElfsightPopup = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      className="elfsight-app-08fc72f8-b1fb-4474-94ac-f1b879cbe1c6" 
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightPopup;
