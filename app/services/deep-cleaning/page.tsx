import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deep Cleaning Tulare County | Clean Dream",
  description:
    "Deep cleaning Tulare County homes with detailed kitchens, bathrooms, and baseboards. Ideal before events, guests, or seasonal resets."
};

export default function DeepCleaningPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Deep Cleaning Tulare County</h1>
          <p>
            Clean Dream provides deep cleaning in Tulare County for homes that need more than a quick surface clean. We
            focus on detail, buildup removal, and full-home reset.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+15595550123">
              Call for Deep Cleaning
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>Who It Is For</h2>
            <ul>
              <li>Homeowners preparing for guests or holidays.</li>
              <li>Families catching up after a busy season.</li>
              <li>Property owners who want a detailed one-time reset.</li>
            </ul>
            <h2>What Is Included in a Deep Clean</h2>
            <h3>Detail Dusting and Wipe-Downs</h3>
            <p>Baseboards, doors, trim, reachable vents, and high-touch surfaces throughout the home.</p>
            <h3>Kitchen and Bathroom Focus</h3>
            <p>Degreasing kitchen surfaces and extra attention to bathroom fixtures, tile, and mirrors.</p>
            <h3>Floor and Room Refresh</h3>
            <p>Vacuuming and mopping with room-by-room detail to leave a cleaner, fresher feel.</p>
            <h2>Benefits</h2>
            <p>Deep cleaning saves your weekends, improves home comfort, and sets a better baseline for regular upkeep.</p>
            <h2>Pricing Guidance</h2>
            <p>Most deep cleaning Tulare County appointments start around $200-$420.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Internal Links</h2>
          <p>
            Need turnover help? See our{" "}
            <Link href="/move-out-cleaning-tulare-county">move out cleaning Tulare County</Link> page. For recurring
            service, visit <Link href="/house-cleaning-tulare-county">house cleaning Tulare County</Link>.
          </p>
        </div>
      </section>

    </>
  );
}
