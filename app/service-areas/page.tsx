import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Clean Dream",
  description: "See the Tulare County cities Clean Dream serves for move-out, deep, and house cleaning."
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Service Areas</h1>
          <p>Clean Dream serves Tulare County with reliable cleaning in the cities below.</p>
        </div>
      </section>

      <section>
        <div className="container grid-3">
          <article className="card">
            <h2>
              <Link href="/tulare-cleaning-services">Tulare</Link>
            </h2>
            <p>Homes, rentals, and turnover cleanings with clear arrival windows and consistent quality.</p>
          </article>
          <article className="card">
            <h2>
              <Link href="/visalia-cleaning-services">Visalia</Link>
            </h2>
            <p>Fast scheduling and dependable service for neighborhoods across central Tulare County.</p>
          </article>
          <article className="card">
            <h2>
              <Link href="/porterville-cleaning-services">Porterville</Link>
            </h2>
            <p>Move-out, deep, and house cleaning options for households and property managers.</p>
          </article>
        </div>
      </section>
    </>
  );
}
