import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking ID - replace with your actual GA4 measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Make gtag available globally
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(arguments);
    };

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters: any = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackConversion = (conversionLabel: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
      value: value,
      currency: 'USD'
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    event_category: 'engagement',
    event_label: formName
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', {
    event_category: 'engagement',
    event_label: buttonName,
    location: location
  });
};

export default GoogleAnalytics;