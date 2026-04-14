import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services Visalia | Clean Dream",
  description:
    "Cleaning services Visalia, CA from trusted local pros. Move-out, deep, and recurring home cleaning with fast quote turnaround."
};

export default function VisaliaPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Cleaning Services in Visalia, CA</h1>
          <p>
            Clean Dream provides cleaning services in Visalia for renters, landlords, and homeowners who want reliable
            service and quick scheduling.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+15595550123">
              Call Visalia Team
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>Services Offered in Visalia</h2>
            <h3>Move-Out Cleaning</h3>
            <p>For apartment turnovers, rental transitions, and final walkthrough prep.</p>
            <h3>Deep Cleaning</h3>
            <p>Great before events, after heavy use periods, or when you need a true reset.</p>
            <h3>House Cleaning</h3>
            <p>Weekly, bi-weekly, and one-time options for homes across Visalia neighborhoods.</p>
            <h2>Local References</h2>
            <p>
              We regularly service homes near Mooney Blvd corridors, Downtown Visalia, and surrounding communities
              across central Tulare County.
            </p>
            <h2>Why Visalia Clients Choose Clean Dream</h2>
            <p>Reliable cleaners, fast turnaround, and satisfaction-focused service with clear communication.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Explore Service Pages</h2>
          <p>
            See <Link href="/move-out-cleaning-tulare-county">move out cleaning Tulare County</Link>,{" "}
            <Link href="/deep-cleaning-tulare-county">deep cleaning Tulare County</Link>, and{" "}
            <Link href="/house-cleaning-tulare-county">house cleaning Tulare County</Link>.
          </p>
        </div>
      </section>

    </>
  );
}
