import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move Out Cleaning | Clean Dream",
  description:
    "Move out cleaning Tulare County for renters and landlords. Detailed checklist, fast scheduling, and clear pricing.",
  alternates: {
    canonical: "/services/move-out-cleaning"
  }
};

export default function MoveOutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Move Out Cleaning Tulare County</h1>
          <p>
            Need dependable move out cleaning in Tulare County? Clean Dream helps you leave the property ready for final
            inspection, new tenants, or listing photos.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+5596560187">
              Call for Move-Out Service
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>Who This Service Is For</h2>
            <ul>
              <li>Renters who want to protect their deposit.</li>
              <li>Landlords preparing units for next tenants.</li>
              <li>Homeowners selling or handing over a property.</li>
            </ul>

            <h2>What Is Included</h2>
            <h3>Kitchen and Appliances</h3>
            <p>Cabinet fronts, counters, sink, stovetop, microwave exterior, and detailed wipe-down of surfaces.</p>
            <h3>Bathrooms and Fixtures</h3>
            <p>Toilets, showers, tubs, sinks, mirrors, and floor cleaning to remove visible buildup.</p>
            <h3>Whole Home Detail</h3>
            <p>Dusting, baseboards, interior windows (reachable), floors, and spot cleaning on doors and trim.</p>

            <h2>Benefits</h2>
            <p>
              A professional move out cleaning in Tulare County saves time during a stressful move, improves inspection
              outcomes, and helps properties look move-in ready faster.
            </p>

            <h2>Pricing Guidance</h2>
            <p>Most move-out projects start around $220-$480 depending on size and condition.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Related Services</h2>
          <p>
            Many customers pair move-out service with{" "}
            <Link href="/services/deep-cleaning">deep cleaning in Tulare County</Link> or switch to{" "}
            <Link href="/services/standard-cleaning">house cleaning in Tulare County</Link> after moving in.
          </p>
        </div>
      </section>

    </>
  );
}
