// Structured Data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Studios by Dave",
  "alternateName": "StudiosbyDave",
  "description": "Professional web design, SEO, AI automations, and digital marketing for roofing contractors, landscaping companies, and solar panel installers.",
  "url": "https://studiosbydave.com",
  "logo": "https://studiosbydave.com/lovable-uploads/53e3faf8-91ca-4a91-841b-36561dcb91f1-optimized.jpg",
  "image": "https://studiosbydave.com/lovable-uploads/88912462-92f4-48cf-8aaf-c9507974f8ea-optimized.jpg",
  "telephone": "+1-704-473-8188",
  "email": "dx1creations25@gmail.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-704-473-8188",
    "contactType": "customer service",
    "email": "dx1creations25@gmail.com",
    "availableLanguage": ["English"],
    "areaServed": "US",
    "contactOption": ["TollFree"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "125 S. Toney Street",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "postalCode": "28150",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.2901",
    "longitude": "-81.5357"
  },
  "sameAs": [
    "https://www.linkedin.com/company/studiosbydave",
    "https://www.facebook.com/studiosbydave"
  ],
  "foundingDate": "2023",
  "numberOfEmployees": "2-10",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "State",
      "name": "North Carolina"
    }
  ],
  "slogan": "We Don't Just Build Websites. We Build Something GREAT Together!",
  "knowsAbout": [
    "Web Design",
    "SEO",
    "Digital Marketing",
    "AI Automation",
    "Branding",
    "Logo Design",
    "Google Optimization"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Studios by Dave"
  },
  "serviceType": "Web Design and Digital Marketing",
  "description": "Professional web design, SEO optimization, AI automations, and branding services for contractors and local businesses.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Custom, responsive websites optimized for lead generation and conversions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization",
          "description": "Search engine optimization to improve local search rankings and visibility."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automations",
          "description": "Cutting-edge AI solutions for lead follow-up, customer service, and business automation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Logo Design & Branding",
          "description": "Professional branding packages including logo design and brand identity."
        }
      }
    ]
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Studios by Dave",
  "image": "https://studiosbydave.com/lovable-uploads/53e3faf8-91ca-4a91-841b-36561dcb91f1-optimized.jpg",
  "telephone": "+1-704-473-8188",
  "email": "dx1creations25@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "125 S. Toney Street",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "postalCode": "28150",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.2901",
    "longitude": "-81.5357"
  },
  "url": "https://studiosbydave.com",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Studios by Dave offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Studios by Dave specializes in web design and development, SEO optimization, AI automations, logo design and branding, Google My Business optimization, and comprehensive digital marketing services specifically for contractors and local businesses including roofing, landscaping, solar installation, tree services, and real estate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside of contracting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we specialize in roofing contractors, landscaping companies, solar panel installers, tree services, and real estate agents, we also work with other local service businesses that need professional web design and digital marketing solutions to grow their online presence."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most custom websites are completed within 2-4 weeks, depending on the complexity and specific requirements. We work closely with you throughout the process to ensure timely delivery without compromising quality. Rush services are available for urgent projects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive SEO services including local SEO optimization, Google My Business optimization, keyword research, content optimization, technical SEO, link building, and ongoing SEO maintenance to help you rank higher in search results and attract more customers."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Studios by Dave different from other web design companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize exclusively in contractor and local business websites, understanding the unique challenges and opportunities in these industries. We offer complete solutions under one roof including web design, SEO, branding, and AI automation. Our focus is on generating real ROI and helping you make more money, not just building pretty websites."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer AI automation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer cutting-edge AI automation solutions including 24/7 chatbots, automated scheduling systems, lead qualification, customer service automation, and process automation to help you save time and increase efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "What is your service area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we're based in Shelby, North Carolina, we serve contractor and local businesses nationwide across the United States. Our digital services can be delivered remotely, allowing us to work with clients anywhere."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website costs vary based on your specific needs, features, and complexity. We offer packages for different budgets and can provide a free quote after discussing your requirements. Contact us for a personalized proposal tailored to your business goals."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});