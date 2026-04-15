import type { Metadata } from "next";
import Link from "next/link";
import QuoteCalculator from "@/components/QuoteCalculator";
import ReviewsMarquee from "@/components/ReviewsMarquee";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does move-out cleaning cost in Tulare County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most move-out cleaning jobs start around $220 and vary by home size and condition."
      }
    },
    {
      "@type": "Question",
      name: "Do you serve Visalia, Tulare, and Porterville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clean Dream serves Tulare County, including Visalia, Tulare, and Porterville."
      }
    },
    {
      "@type": "Question",
      name: "What cleaning types do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer move-out cleaning, deep cleaning, and recurring standard house cleaning."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Move-Out Cleaning Tulare County | Clean Dream",
  description:
    "Move-out cleaning in Tulare County with fast scheduling, clear pricing, and reliable crews in Visalia, Tulare, and Porterville.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Move-Out Cleaning Tulare County | Clean Dream",
    description:
      "Fast, reliable move-out cleaning service for renters, landlords, and homeowners across Tulare County.",
    url: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero hero-home">
        <div className="hero-media" />
        <div className="container hero-content-wrap">
          <div className="hero-content">
            <h1>Move-Out Cleaning in Tulare County</h1>
            <p>Fast, Reliable, Move-In Ready Cleaning</p>
            <p>
              Clean Dream helps renters, landlords, and homeowners get properties cleaned quickly and thoroughly
              before move-out inspections, showings, or new tenant move-ins.
            </p>
            <div className="cta-row">
              <a className="button" href="tel:+5596560187">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="city-banner-section">
        <div className="city-banner-marquee">
          <div className="city-banner-track">
            <Link href="/service-areas/tulare">Tulare</Link>
            <span>|</span>
            <Link href="/service-areas/visalia">Visalia</Link>
            <span>|</span>
            <Link href="/service-areas/porterville">Porterville</Link>
            <span>|</span>
            <Link href="/service-areas/tulare">Tulare</Link>
            <span>|</span>
            <Link href="/service-areas/visalia">Visalia</Link>
            <span>|</span>
            <Link href="/service-areas/porterville">Porterville</Link>
            <span>|</span>
          </div>
          <div className="city-banner-track" aria-hidden="true">
            <Link href="/service-areas/tulare">Tulare</Link>
            <span>|</span>
            <Link href="/service-areas/visalia">Visalia</Link>
            <span>|</span>
            <Link href="/service-areas/porterville">Porterville</Link>
            <span>|</span>
            <Link href="/service-areas/tulare">Tulare</Link>
            <span>|</span>
            <Link href="/service-areas/visalia">Visalia</Link>
            <span>|</span>
            <Link href="/service-areas/porterville">Porterville</Link>
            <span>|</span>
          </div>
        </div>
      </section>

      <QuoteCalculator />

      <section className="services-overview-section">
        <div className="services-overview-heading-bar">
          <h2 className="services-overview-heading">Services Overview</h2>
        </div>
        <div className="services-unique-grid">
          <article className="service-card-unique">
              <Link className="service-media-link" href="/services/move-out-cleaning">
                <div className="service-media">
                  <img
                    className="service-image-before"
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                    alt="Move-Out Cleaning"
                    loading="lazy"
                  />
                  <img
                    className="service-image-after"
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80"
                    alt="Move-Out Cleaning"
                    loading="lazy"
                  />
                  <div className="service-overlay-text">
                    <h3>Move-Out Cleaning</h3>
                    <p>
                      Detailed top-to-bottom cleaning for vacant homes, apartments, and rental units.
                    </p>
                  </div>
                </div>
              </Link>
            </article>
            <article className="service-card-unique">
              <Link className="service-media-link" href="/services/deep-cleaning">
                <div className="service-media">
                  <img
                    className="service-image-before"
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=80"
                    alt="Deep Cleaning"
                    loading="lazy"
                  />
                  <img
                    className="service-image-after"
                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
                    alt="Deep Cleaning"
                    loading="lazy"
                  />
                  <div className="service-overlay-text">
                    <h3>Deep Cleaning</h3>
                    <p>Reset your home with a heavy-detail clean that reaches buildup in kitchens, bathrooms, and baseboards.</p>
                  </div>
                </div>
              </Link>
            </article>
            <article className="service-card-unique">
              <Link className="service-media-link" href="/services/standard-cleaning">
                <div className="service-media">
                  <img
                    className="service-image-before"
                    src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80"
                    alt="House Cleaning"
                    loading="lazy"
                  />
                  <img
                    className="service-image-after"
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
                    alt="House Cleaning"
                    loading="lazy"
                  />
                  <div className="service-overlay-text">
                    <h3>House Cleaning</h3>
                    <p>Ongoing or one-time home cleaning for busy families and homeowners.</p>
                  </div>
                </div>
              </Link>
            </article>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <ReviewsMarquee />
        </div>
      </section> */}

    </>
  );
}
