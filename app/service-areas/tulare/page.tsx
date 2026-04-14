import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services Tulare | Clean Dream",
  description:
    "Cleaning services Tulare, CA with move-out, deep cleaning, and recurring home cleaning. Request a fast local quote today."
};

export default function TularePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Cleaning Services in Tulare, CA</h1>
          <p>
            Need trusted cleaning services in Tulare? Clean Dream helps local residents, property owners, and landlords
            keep homes clean and move-in ready.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+15595550123">
              Call Tulare Team
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>What We Offer in Tulare</h2>
            <h3>Move-Out Cleaning</h3>
            <p>Ideal for lease turnovers, home sales, and final inspection prep.</p>
            <h3>Deep Cleaning</h3>
            <p>Detailed service for kitchens, bathrooms, and high-touch areas that need extra work.</p>
            <h3>House Cleaning</h3>
            <p>Recurring maintenance service for families and busy professionals in Tulare.</p>
            <h2>Local SEO Signals</h2>
            <p>
              From central Tulare neighborhoods to homes near Highway 99 access routes, our cleaners serve the city and
              nearby Tulare County communities.
            </p>
            <h2>Pricing Guidance</h2>
            <p>Most Tulare jobs start in the $140-$480 range depending on service type and home condition.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Related Pages</h2>
          <p>
            Learn about <Link href="/move-out-cleaning-tulare-county">move out cleaning Tulare County</Link>,{" "}
            <Link href="/deep-cleaning-tulare-county">deep cleaning Tulare County</Link>, and{" "}
            <Link href="/house-cleaning-tulare-county">house cleaning Tulare County</Link>.
          </p>
        </div>
      </section>

    </>
  );
}
