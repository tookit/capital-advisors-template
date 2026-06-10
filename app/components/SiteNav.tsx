'use client';

import Link from 'next/link';
import { useState } from 'react';

type SiteNavProps = {
  active?: 'home' | 'about' | 'services' | 'industries' | 'cases' | 'insights' | 'contact';
};

const links = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/about', label: 'About', id: 'about' },
  { href: '/services', label: 'Services', id: 'services' },
  { href: '/industries', label: 'Industries', id: 'industries' },
  { href: '/case-studies', label: 'Case Studies', id: 'cases' },
  { href: '/insights', label: 'Insights', id: 'insights' },
  { href: '/contact', label: 'Contact', id: 'contact' },
] as const;

export function SiteNav({ active }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-text">Capital Advisors</span>
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href + link.id}>
              <Link href={link.href} className={active === link.id ? 'active' : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-phone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L8 9.71a16 16 0 0 0 6.29 6.29l1.25-1.25a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Get in Touch</span>
        </Link>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href + link.id}
            href={link.href}
            className={active === link.id ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="mobile-menu-phone" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
