import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Contact | Capital Advisors',
  description:
    'Get in touch to discuss customized financing and financial advisory needs for mission-driven organizations.',
};

const contactCards = [
  {
    label: 'Call',
    title: '(555) 123-4567',
    body: 'Speak with our team about your capital planning needs.',
    href: 'tel:15551234567',
  },
  {
    label: 'Office',
    title: 'New York, New York',
    body: '123 Financial District, New York, NY 10005',
    href: 'https://www.google.com/maps/search/?api=1&query=123%20Financial%20District%20New%20York%20NY%2010005',
  },
];

const expectations = [
  'A focused conversation about your institution, capital needs and timeline.',
  'Objective perspective on financing alternatives and strategic considerations.',
  'Clear next steps for evaluating structure, market access and execution risk.',
];

export default function ContactPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="contact" />
      <main>
        <section className="subpage-hero contact-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">Contact</p>
              <h1 className="hero-headline">Start a conversation about your capital needs.</h1>
              <p className="hero-subhead">
                Whether you are planning a new development, restructuring debt or weighing strategic options, we can help bring the path forward into focus.
              </p>
              <div>
                <a href="tel:15551234567" className="hero-cta">
                  Call (555) 123-4567
                </a>
                <Link href="/services" className="hero-cta-secondary">
                  Explore services
                </Link>
              </div>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/advisory-office/800/620"
                alt="Professional advisory meeting table"
                className="hero-image"
              />
              <div className="hero-stat-card">
                New York
                <span>National advisory reach</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section reveal">
          <div className="contact-section-inner">
            <div className="contact-info-panel">
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">Talk with an advisor before the financing path is set.</h2>
              <p>
                Early perspective can help boards and leadership teams compare alternatives, understand tradeoffs and avoid locking into terms that do not fit the institution&apos;s long-term mission.
              </p>

              <div className="contact-card-grid">
                {contactCards.map((card) => (
                  <a className="contact-card" href={card.href} key={card.label} target={card.label === 'Office' ? '_blank' : undefined} rel={card.label === 'Office' ? 'noreferrer' : undefined}>
                    <span>{card.label}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </a>
                ))}
              </div>

              <div className="contact-expectations">
                <h3>What to expect</h3>
                <ul className="check-list">
                  {expectations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <form className="contact-form" action="#" method="post">
              <div className="contact-form-heading">
                <p className="section-label">Inquiry</p>
                <h2>Tell us what you are working on.</h2>
              </div>

              <label>
                Name
                <input type="text" name="name" autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                Organization
                <input type="text" name="organization" autoComplete="organization" placeholder="Institution or company" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" autoComplete="tel" placeholder="Best number to reach you" />
              </label>
              <label>
                Area of interest
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Customized Financing</option>
                  <option>Financial Advisory</option>
                  <option>Debt Restructuring</option>
                  <option>Strategic Transaction</option>
                  <option>General Conversation</option>
                </select>
              </label>
              <label className="contact-form-wide">
                Message
                <textarea name="message" rows={6} placeholder="Share a few details about timing, goals or the decision ahead." />
              </label>
              <button type="submit" className="hero-cta contact-submit">
                Submit inquiry
              </button>
              <p className="contact-form-note">
                This form is ready for integration with your preferred CRM or form handler. For time-sensitive requests, please call us directly.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
