import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.cleandreamca.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Clean Dream",
  url: siteUrl,
  telephone: "+1-559-656-0187",
  email: "admin@cleandreamca.com",
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
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00"
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Standard House Cleaning" } }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Clean Dream",
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteUrl}/#localbusiness`
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clean Dream | Cleaning Services Tulare County",
  description:
    "Clean Dream offers move-out, deep, and standard house cleaning in Tulare County, including Visalia, Tulare, and Porterville.",
  keywords: [
    "move out cleaning tulare county",
    "deep cleaning tulare county",
    "house cleaning tulare county",
    "cleaning services visalia",
    "cleaning services tulare",
    "cleaning services porterville",
    "cleaning service tulare county",
    "local cleaners tulare county",
    "move out cleaning",
    "deep cleaning",
    "standard house cleaning"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Clean Dream | Cleaning Services Tulare County",
    description:
      "Move-out, deep, and standard house cleaning in Tulare County, including Visalia, Tulare, and Porterville.",
    siteName: "Clean Dream",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Dream | Cleaning Services Tulare County",
    description:
      "Professional cleaning for Tulare County homes, rentals, and move-out turnovers.",
    site: "@cleandreamca"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
