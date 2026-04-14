import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services | Clean Dream",
  description: "Explore move-out, deep, and standard house cleaning services offered by Clean Dream in Tulare County."
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Cleaning Services</h1>
          <p>Move-out, deep, and recurring house cleaning built for Tulare County homes and rental properties.</p>
        </div>
      </section>

      <section>
        <div className="container grid-3">
          <article className="card">
            <h2>
              <Link href="/move-out-cleaning-tulare-county">Move-Out Cleaning</Link>
            </h2>
            <p>Detailed top-to-bottom cleaning for vacant homes, apartments, and turnover properties.</p>
            <p className="service-price">STARTING FROM $220</p>
          </article>
          <article className="card">
            <h2>
              <Link href="/deep-cleaning-tulare-county">Deep Cleaning</Link>
            </h2>
            <p>High-detail cleaning for kitchens, bathrooms, baseboards, and heavily used areas.</p>
            <p className="service-price">STARTING FROM $200</p>
          </article>
          <article className="card">
            <h2>
              <Link href="/house-cleaning-tulare-county">House Cleaning</Link>
            </h2>
            <p>Ongoing or one-time maintenance cleaning for busy homes across the county.</p>
            <p className="service-price">STARTING FROM $140</p>
          </article>
        </div>
      </section>
    </>
  );
}
