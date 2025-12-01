import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://studiosbydave.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noindex = false
}: SEOProps) => {
  const fullTitle = title.includes("Studios by Dave") ? title : `${title} | Studios by Dave`;
  const url = canonical || `https://studiosbydave.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Studios by Dave" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@studiosbydave" />
      
      {/* Performance Optimization - Preload LCP Image */}
      <link rel="preload" as="image" href="/lovable-uploads/88912462-92f4-48cf-8aaf-c9507974f8ea-optimized.jpg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Studios by Dave" />
      <meta name="publisher" content="Studios by Dave" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Shelby" />
      <meta name="geo.position" content="35.2901;-81.5357" />
      <meta name="ICBM" content="35.2901, -81.5357" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;