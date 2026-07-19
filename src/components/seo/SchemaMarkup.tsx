import React from "react";
import { SHOWROOM_INFO, FAQ_ITEMS } from "@/data/monteiroData";

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "FashionStore"],
    "@id": "https://monteirotextiles.com/#localbusiness",
    "name": SHOWROOM_INFO.name,
    "alternateName": "Monteiro Textiles Mangalore",
    "description": "South India's premier multi-brand luxury textile showroom located at Sharja Complex, Hampankatta, Mangalore. Featuring genuine Raymond fine worsteds, Siyaram's executive suitings, Linen Club pure European flax, and imported suitings/brocades from Zegna, Loro Piana, and Scabal.",
    "url": "https://monteirotextiles.com",
    "telephone": SHOWROOM_INFO.phone,
    "email": SHOWROOM_INFO.email,
    "priceRange": "$$-$$$$",
    "image": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SHOWROOM_INFO.addressLine1,
      "addressLocality": SHOWROOM_INFO.city,
      "addressRegion": SHOWROOM_INFO.state,
      "postalCode": SHOWROOM_INFO.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8688,
      "longitude": 74.8430
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Showroom Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bespoke Styling Lounge",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Dual-Spectrum Fabric Lighting",
        "value": true
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "South India, Karnataka, Mangalore, Bangalore, Kerala, Goa"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://monteirotextiles.com/#organization",
    "name": "Monteiro Textiles",
    "url": "https://monteirotextiles.com",
    "logo": "https://monteirotextiles.com/logo.png",
    "foundingDate": "1978",
    "founders": [
      {
        "@type": "Person",
        "name": "Mr. Anthony Monteiro Sr."
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SHOWROOM_INFO.phone,
      "contactType": "Concierge & Showroom Appointments",
      "areaServed": "IN",
      "availableLanguage": ["English", "Kannada", "Tulu", "Konkani", "Hindi"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Luxury Showroom Home",
        "item": "https://monteirotextiles.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "The 8 Fabric Vaults",
        "item": "https://monteirotextiles.com/collections"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hampankatta Flagship Visit",
        "item": "https://monteirotextiles.com/visit"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
