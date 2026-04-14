import Image from "next/image";
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
          <Link href="/services/standard-cleaning">Standard House Cleaning</Link>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="mailto:admin@cleandreamca.com">admin@cleandreamca.com</a>
          <a href="tel:+5596560187">(559) 656-0187</a>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/cleandreamca"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Clean Dream on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 5.615v2.385z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/cleandreamca"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Clean Dream on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <small>Tulare County, California</small>
        <Link href="/" className="footer-bottom-logo" aria-label="Clean Dream home">
          <Image
            src="/assets/images/logo.png"
            alt="Clean Dream"
            width={395}
            height={148}
            className="footer-logo"
          />
        </Link>
      </div>
    </footer>
  );
}
