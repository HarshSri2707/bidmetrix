// import { useEffect } from 'react';

// const SEO = ({ title, description, keywords, ogImage }) => {
//   useEffect(() => {
//     // Set page title
//     document.title = title;

//     // Set or update meta description
//     let metaDescription = document.querySelector('meta[name="description"]');
//     if (metaDescription) {
//       metaDescription.setAttribute('content', description);
//     } else {
//       metaDescription = document.createElement('meta');
//       metaDescription.name = 'description';
//       metaDescription.content = description;
//       document.head.appendChild(metaDescription);
//     }

//     // Set or update meta keywords
//     if (keywords) {
//       let metaKeywords = document.querySelector('meta[name="keywords"]');
//       if (metaKeywords) {
//         metaKeywords.setAttribute('content', keywords);
//       } else {
//         metaKeywords = document.createElement('meta');
//         metaKeywords.name = 'keywords';
//         metaKeywords.content = keywords;
//         document.head.appendChild(metaKeywords);
//       }
//     }

//     // Open Graph tags
//     const ogTags = {
//       'og:title': title,
//       'og:description': description,
//       'og:type': 'website',
//     };

//     if (ogImage) {
//       ogTags['og:image'] = ogImage;
//     }

//     Object.entries(ogTags).forEach(([property, content]) => {
//       let meta = document.querySelector(`meta[property="${property}"]`);
//       if (meta) {
//         meta.setAttribute('content', content);
//       } else {
//         meta = document.createElement('meta');
//         meta.setAttribute('property', property);
//         meta.setAttribute('content', content);
//         document.head.appendChild(meta);
//       }
//     });

//     // Twitter Card tags
//     const twitterTags = {
//       'twitter:card': 'summary_large_image',
//       'twitter:title': title,
//       'twitter:description': description,
//     };

//     if (ogImage) {
//       twitterTags['twitter:image'] = ogImage;
//     }

//     Object.entries(twitterTags).forEach(([name, content]) => {
//       let meta = document.querySelector(`meta[name="${name}"]`);
//       if (meta) {
//         meta.setAttribute('content', content);
//       } else {
//         meta = document.createElement('meta');
//         meta.setAttribute('name', name);
//         meta.setAttribute('content', content);
//         document.head.appendChild(meta);
//       }
//     });
//   }, [title, description, keywords, ogImage]);

//   return null;
// };

// export default SEO;


import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../../data/seoData';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  canonical,
  type = 'website',
  article = false 
}) => {
  const location = useLocation();
  const siteUrl = seoConfig.siteUrl;
  
  // Build full URL for canonical and og:url
  const fullUrl = `${siteUrl}${canonical || location.pathname}`;
  
  // Default image if not provided
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  const ogImage = image || defaultImage;
  
  // Full title with site name
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || seoConfig.defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || seoConfig.defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || seoConfig.defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      {seoConfig.social.twitter && <meta name="twitter:site" content={seoConfig.social.twitter} />}
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:publisher" content={seoConfig.social.facebook} />
          <meta property="article:section" content="Technology" />
        </>
      )}
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={seoConfig.siteName} />
      
      {/* Geographic tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Kanpur" />
      <meta name="geo.position" content="26.4499;80.3319" />
      <meta name="ICBM" content="26.4499, 80.3319" />
    </Helmet>
  );
};

export default SEO;