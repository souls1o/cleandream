import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services Porterville | Clean Dream",
  description:
    "Cleaning services Porterville, CA for move-out, deep, and routine home cleaning. Reliable local crews and quick quote response.",
  alternates: {
    canonical: "/service-areas/porterville"
  }
};

export default function PortervillePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Cleaning Services in Porterville, CA</h1>
          <p>
            Clean Dream delivers professional cleaning services in Porterville with fast response times and practical
            pricing for local homeowners and renters.
          </p>
          <div className="cta-row">
            <a className="button" href="tel:+5596560187">
              Call Porterville Team
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article>
            <h2>Porterville Service Options</h2>
            <h3>Move-Out Cleaning</h3>
            <p>Support for renters, landlords, and sale-ready homes across Porterville.</p>
            <h3>Deep Cleaning</h3>
            <p>A full-home reset that targets hidden dust, buildup, and heavily used areas.</p>
            <h3>House Cleaning</h3>
            <p>Recurring and one-time service to keep your home consistently clean.</p>
            <h2>Local References</h2>
            <p>
              We serve homes around major Porterville routes and residential areas throughout eastern Tulare County.
            </p>
            <h2>Trust Elements</h2>
            <p>
              Reliable cleaners, fast turnaround for urgent jobs, and satisfaction-focused service are central to every
              Porterville appointment.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Internal Links</h2>
          <p>
            Compare <Link href="/services/move-out-cleaning">move out cleaning Tulare County</Link>,{" "}
            <Link href="/services/deep-cleaning">deep cleaning Tulare County</Link>, and{" "}
            <Link href="/services/standard-cleaning">house cleaning Tulare County</Link>.
          </p>
        </div>
      </section>

    </>
  );
}
