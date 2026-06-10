import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Capital Advisors</p>
          <p className="footer-address">
            123 Financial District
            <br />
            New York, NY 10005
          </p>
          <p className="footer-phone">(555) 123-4567</p>
        </div>
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li>
              <Link href="/services#customized-financing">Customized Financing</Link>
            </li>
            <li>
              <Link href="/services#financial-advisory">Financial Advisory</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Industries</p>
          <ul className="footer-links">
            <li>
              <Link href="/industries">Senior Housing</Link>
            </li>
            <li>
              <Link href="/industries">Charter Schools</Link>
            </li>
            <li>
              <Link href="/industries">Hospitals &amp; Health Systems</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about#team">Meet the Team</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/insights">Insights &amp; News</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Capital Advisors. All rights reserved.</span>
        <ul className="footer-bottom-links">
          <li>
            <Link href="#">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
