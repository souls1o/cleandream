import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Standard House Cleaning | Clean Dream",
  description:
    "House cleaning Tulare County for busy families and homeowners. One-time or recurring plans with trusted local cleaners.",
  alternates: {
    canonical: "/services/standard-cleaning"
  }
};

export default function HouseCleaningPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>House Cleaning Tulare County</h1>
          <p>
            Looking for dependable house cleaning in Tulare County? Clean Dream offers recurring and one-time options
            built around your schedule.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+5596560187">
              Call for House Cleaning
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>Who It Is For</h2>
            <ul>
              <li>Busy homeowners who want consistent cleaning.</li>
              <li>Parents balancing work and home routines.</li>
              <li>Anyone who wants a clean home without losing weekends.</li>
            </ul>

            <h2>What Is Included</h2>
            <h3>Kitchen Maintenance</h3>
            <p>Countertops, sink, outside appliance wipe-downs, and floor cleaning.</p>
            <h3>Bathroom Cleaning</h3>
            <p>Toilets, tubs/showers, mirrors, sinks, and mopping with attention to high-use areas.</p>
            <h3>Living Areas and Bedrooms</h3>
            <p>Dusting, vacuuming, mopping, and touchpoint cleaning to keep your home fresh week to week.</p>

            <h2>Benefits</h2>
            <p>
              House cleaning in Tulare County gives you consistent cleanliness, more free time, and a healthier daily
              environment.
            </p>
            <h2>Pricing Guidance</h2>
            <p>Standard service usually starts around $140-$280 depending on home size and visit frequency.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Compare Services</h2>
          <p>
            If you need more detail than a standard clean, check{" "}
            <Link href="/services/deep-cleaning">deep cleaning Tulare County</Link>. For vacant properties, use{" "}
            <Link href="/services/move-out-cleaning">move out cleaning Tulare County</Link>.
          </p>
        </div>
      </section>

    </>
  );
}
