import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-column">
          <h3>Clean Dream</h3>
          <p>
            We help renters, homeowners, and property managers keep spaces move-in ready with reliable, detail-focused
            cleaning service across Tulare County.
          </p>
        </div>

        <div className="footer-column">
          <h3>Service Areas</h3>
          <Link href="/service-areas/visalia">Visalia</Link>
          <Link href="/service-areas/tulare">Tulare</Link>
          <Link href="/service-areas/porterville">Porterville</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <Link href="/services/move-out-cleaning">Move-Out</Link>
          <Link href="/services/deep-cleaning">Deep Cleaning</Link>
          <Link href="/services/standard-cleaning">House Cleaning</Link>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="tel:+15596560187">(559) 656-0187</a>
          <a href="mailto:hello@cleandreamca.com">hello@cleandreamco.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>Tulare County, California</small>
        <small>Clean Dream</small>
      </div>
    </footer>
  );
}
