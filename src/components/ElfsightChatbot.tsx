import { useEffect } from "react";

const ElfsightChatbot = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup not needed as script should persist
    };
  }, []);

  return (
    <div 
      className="elfsight-app-fe41bcb2-9bed-4b99-ab66-5f076ba6c148" 
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightChatbot;
