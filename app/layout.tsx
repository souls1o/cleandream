import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.cleandreamco.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Clean Dream",
  url: siteUrl,
  telephone: "+1-559-555-0123",
  email: "hello@cleandreamco.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Tulare County, CA" },
    { "@type": "City", name: "Visalia, CA" },
    { "@type": "City", name: "Tulare, CA" },
    { "@type": "City", name: "Porterville, CA" }
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tulare County",
    addressRegion: "CA",
    addressCountry: "US"
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00"
    }
  ],
  sameAs: []
};

const cleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#cleaning-service`,
  serviceType: "Residential Cleaning Service",
  name: "Cleaning Services in Tulare County",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Clean Dream"
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Tulare County, CA" },
    { "@type": "City", name: "Visalia, CA" },
    { "@type": "City", name: "Tulare, CA" },
    { "@type": "City", name: "Porterville, CA" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-Out Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Cleaning" } }
    ]
  }
};

export const metadata: Metadata = {
  title: "Clean Dream | Cleaning Services Tulare County",
  description:
    "Clean Dream offers move-out, deep, and house cleaning in Tulare County, including Visalia, Tulare, and Porterville.",
  icons: {
    icon: "/assets/images/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaningServiceSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
