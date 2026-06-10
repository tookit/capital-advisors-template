import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Insights | Capital Advisors',
  description:
    'Latest transactions, market insights, and thought leadership from our capital advisory team.',
};

const featuredInsights = [
  {
    category: 'Market Commentary',
    title: 'Navigating the 2026 Tax-Exempt Bond Market',
    date: 'June 2026',
    summary:
      'Rising rates and shifting credit conditions are reshaping the municipal bond landscape. Here is what nonprofit borrowers should watch when planning their next capital raise.',
    href: '#',
  },
  {
    category: 'Transaction Spotlight',
    title: '$230M Multi-Facility Financing Program Closes',
    date: 'May 2026',
    summary:
      'A multi-facility financing program supports a senior living provider\'s growth and capital planning needs across multiple campuses.',
    href: '#',
  },
  {
    category: 'Thought Leadership',
    title: 'Why Independent Financial Advisors Matter for Nonprofit Boards',
    date: 'April 2026',
    summary:
      'Board members carry significant fiduciary responsibility. An independent advisor provides the objective perspective needed to evaluate financing alternatives without the conflict of a lender\'s interest.',
    href: '#',
  },
];

const recentUpdates = [
  {
    category: 'Transaction',
    title: 'Benedictine Health System — Capital Access Engagement',
    date: 'March 2026',
    summary:
      'Structured capital access for a mission-driven healthcare organization navigating long-term financing decisions.',
  },
  {
    category: 'Transaction',
    title: 'Kensington Park — Capital Planning and Debt Structure',
    date: 'February 2026',
    summary:
      'Advisory engagement centered on capital planning, financing flexibility, and borrower-specific debt structure for a senior housing community.',
  },
  {
    category: 'Transaction',
    title: 'Jacksonville School for Autism — Mission-Centered Financing',
    date: 'January 2026',
    summary:
      'Capital guidance for a specialized school to support mission-centered facilities and service delivery.',
  },
  {
    category: 'Perspective',
    title: 'The Case for Customized Financing Structures',
    date: 'December 2025',
    summary:
      'Off-the-shelf financing products rarely fit the unique needs of mission-driven organizations. Customized structures can deliver better terms, greater flexibility, and stronger alignment with long-term goals.',
  },
  {
    category: 'Transaction',
    title: 'Rhodes School — Borrower Advisory and Capital Access',
    date: 'November 2025',
    summary:
      'School financing engagement involving borrower-specific advisory support and access to tax-exempt capital markets.',
  },
  {
    category: 'Perspective',
    title: 'Preparing Your Board for a Capital Raise',
    date: 'October 2025',
    summary:
      'A practical guide for executive leadership helping their board understand the financing process, evaluate alternatives, and make confident decisions.',
  },
];

export default function InsightsPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="insights" />
      <main>
        <section className="subpage-hero insights-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">Insights</p>
              <h1 className="hero-headline">
                Latest transactions and perspectives.
              </h1>
              <p className="hero-subhead">
                Market commentary, transaction announcements, and thought leadership on capital markets for mission-driven organizations.
              </p>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/insights-hero/800/620"
                alt="Financial reports and market analysis"
                className="hero-image"
              />
              <div className="hero-stat-card">
                Market insights
                <span>Industry commentary</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="section-header">
            <p className="section-label">Featured</p>
            <h2 className="section-title">Recent thinking on capital markets and strategy.</h2>
          </div>
          <div className="cases-grid">
            {featuredInsights.map((insight) => (
              <div
                className="case-card"
                style={{ background: 'var(--green-surface)', color: 'inherit' }}
                key={insight.title}
              >
                <div className="case-card-body">
                  <p className="case-tag" style={{ color: 'var(--gold)' }}>
                    {insight.category}
                  </p>
                  <h3 className="case-title" style={{ color: 'var(--green-deep)' }}>
                    {insight.title}
                  </h3>
                  <p
                    className="case-desc"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {insight.summary}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                    }}
                  >
                    {insight.date}
                  </p>
                  <Link
                    href={insight.href}
                    className="case-link"
                    style={{ color: 'var(--green-mid)' }}
                  >
                    Read more{' '}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="case-library reveal">
          <div className="case-library-inner">
            <div className="section-header">
              <p className="section-label">Archive</p>
              <h2 className="section-title">More transactions and perspectives.</h2>
            </div>
            <div className="case-library-grid">
              {recentUpdates.map((item) => (
                <article className="case-library-card" key={item.title}>
                  <div className="case-library-card-top">
                    <p>{item.category}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Stay informed on capital markets.</h2>
            <p className="cta-desc">
              Subscribe to receive market commentary, transaction announcements, and insights from our advisory team.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="hero-cta">
                Get in touch
              </Link>
              <Link href="/services" className="hero-cta-secondary">
                Explore services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
