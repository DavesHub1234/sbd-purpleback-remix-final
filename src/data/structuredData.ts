// Structured Data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dx1 Solutions",
  "description": "Professional web design, SEO, AI automations, and digital marketing for roofing contractors, landscaping companies, and solar panel installers.",
  "url": "https://dx1solutions.com",
  "logo": "https://dx1solutions.com/lovable-uploads/e5ffd9f6-4196-4d1f-b599-23872de83cbe.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-704-473-8188",
    "contactType": "customer service",
    "email": "davidrichardson@dx1solutions.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "125 S. Toney Street",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/dx1solutions",
    "https://www.facebook.com/dx1solutions"
  ],
  "foundingDate": "2023",
  "numberOfEmployees": "2-10",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceArea": {
    "@type": "State",
    "name": "North Carolina"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Dx1 Solutions"
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
  "name": "Dx1 Solutions",
  "image": "https://dx1solutions.com/lovable-uploads/e5ffd9f6-4196-4d1f-b599-23872de83cbe.png",
  "telephone": "+1-704-473-8188",
  "email": "davidrichardson@dx1solutions.com",
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
  "url": "https://dx1solutions.com",
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
      "name": "What services does Dx1 Solutions offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dx1 Solutions specializes in web design and development, SEO optimization, AI automations, logo design and branding, and Google optimization services specifically for contractors and local businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside of contracting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we specialize in roofing contractors, landscaping companies, and solar panel installers, we also work with other local service businesses that need professional web design and digital marketing solutions."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most custom websites are completed within 2-4 weeks, depending on the complexity and specific requirements. We work closely with you throughout the process to ensure timely delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive SEO services including local SEO optimization, Google My Business optimization, keyword research, content optimization, and ongoing SEO maintenance to help you rank higher in search results."
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