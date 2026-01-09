import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../data/seoData';

const StructuredData = ({ type = 'organization', data = {} }) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": seoConfig.organization.name,
      "url": seoConfig.organization.url,
      "logo": seoConfig.organization.logo,
      "description": seoConfig.organization.description,
      "address": {
        "@type": "PostalAddress",
        ...seoConfig.organization.address
      },
      "contactPoint": {
        "@type": "ContactPoint",
        ...seoConfig.organization.contactPoint
      },
      "sameAs": [
        seoConfig.social.facebook,
        seoConfig.social.linkedin,
        seoConfig.social.twitter
      ]
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": seoConfig.siteName,
      "url": seoConfig.siteUrl,
      "description": seoConfig.defaultDescription,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${seoConfig.siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.breadcrumbs?.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${seoConfig.siteUrl}${item.path}`
      })) || []
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.description,
      "image": data.image,
      "datePublished": data.datePublished,
      "dateModified": data.dateModified || data.datePublished,
      "author": {
        "@type": "Organization",
        "name": seoConfig.siteName
      },
      "publisher": {
        "@type": "Organization",
        "name": seoConfig.siteName,
        "logo": {
          "@type": "ImageObject",
          "url": seoConfig.organization.logo
        }
      }
    },
    
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs?.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })) || []
    }
  };

  const schema = schemas[type] || schemas.organization;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
