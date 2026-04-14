"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const serviceLinks = [
    { href: "/services/move-out-cleaning", label: "Move-Out" },
    { href: "/services/deep-cleaning", label: "Deep Cleaning" },
    { href: "/services/standard-cleaning", label: "Standard House Cleaning" }
  ];
  const areaLinks = [
    { href: "/service-areas/visalia", label: "Visalia" },
    { href: "/service-areas/tulare", label: "Tulare" },
    { href: "/service-areas/porterville", label: "Porterville" }
  ];
  const servicesActive = serviceLinks.some((link) => pathname === link.href);
  const areasActive = areaLinks.some((link) => pathname === link.href);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label="Clean Dream home">
          <Image
            src="/assets/images/logo.png"
            alt="Clean Dream"
            width={395}
            height={148}
            className="brand-logo"
            priority
          />
        </Link>
        <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-hidden="true" />
        <label className="nav-toggle-button" htmlFor="nav-toggle" aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </label>
        <nav className="site-nav" aria-label="Main navigation">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : undefined}>
                Home
              </Link>
            </li>
            <li className="nav-separator" aria-hidden="true">
              &bull;
            </li>
            <li className="nav-dropdown">
              <Link href="/services" className={pathname === "/services" || servicesActive ? "active nav-group" : "nav-group"}>
                Services
              </Link>
              <div className="nav-dropdown-menu">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : undefined}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-separator" aria-hidden="true">
              &bull;
            </li>
            <li className="nav-dropdown">
              <Link
                href="/service-areas"
                className={pathname === "/service-areas" || areasActive ? "active nav-group" : "nav-group"}
              >
                Service Areas
              </Link>
              <div className="nav-dropdown-menu">
                {areaLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : undefined}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
