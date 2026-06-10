import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../../../components/RevealOnScroll';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteNav } from '../../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Jane Mitchell | Capital Advisors',
  description:
    'Jane Mitchell, Managing Partner at Capital Advisors, leads the strategic advisory practice with over two decades of capital markets experience.',
};

export default function JaneMitchellPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="about" />
      <main>
        <section className="subpage-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <Link href="/about#team" className="case-back-link">
                Meet the Team
              </Link>
              <p className="hero-eyebrow">Managing Partner</p>
              <h1 className="hero-headline">Jane Mitchell</h1>
              <p className="hero-subhead">
                Over two decades of capital markets experience, specializing in complex financing structures for mission-driven organizations.
              </p>
            </div>
            <div className="subpage-hero-visual reveal">
              <div
                className="team-avatar"
                style={{
                  width: '180px',
                  height: '180px',
                  fontSize: '2.5rem',
                  borderRadius: '16px',
                }}
                aria-hidden="true"
              >
                JM
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <p className="section-label">Background</p>
              <h2 className="section-title">Strategic leadership built across market cycles.</h2>
            </div>
            <div className="content-stack">
              <p>
                Jane Mitchell founded the firm with a clear vision: provide independent, objective capital advisory services to mission-driven organizations that are underserved by traditional financial intermediaries.
              </p>
              <p>
                With a career spanning more than two decades, Jane has advised on transactions totaling over $5 billion across the senior housing, education, and healthcare sectors. Her approach combines rigorous financial analysis with a deep understanding of the governance and mission considerations that shape capital decisions at nonprofit institutions.
              </p>
              <p>
                Prior to founding the firm, Jane held senior positions at leading investment banks and advisory firms, where she developed expertise in tax-exempt bond financing, structured credit, and strategic capital planning. She holds an MBA from a top-tier business school and is a frequent speaker at industry conferences on nonprofit capital markets.
              </p>
            </div>
          </div>
        </section>

        <section className="dark-band reveal">
          <div className="dark-band-inner">
            <div className="section-header">
              <p className="section-label">Expertise</p>
              <h2 className="section-title">Areas of focus.</h2>
            </div>
            <div className="why-grid">
              <div className="why-feature">
                <h3>Tax-Exempt Bond Financing</h3>
                <p>Extensive experience structuring and placing tax-exempt debt for nonprofit borrowers across multiple sectors.</p>
              </div>
              <div className="why-feature">
                <h3>Strategic Capital Planning</h3>
                <p>Helping boards and leadership teams align capital structures with long-term institutional strategy and mission.</p>
              </div>
              <div className="why-feature">
                <h3>Complex Transaction Leadership</h3>
                <p>Managing multi-party financing transactions that require coordination across lenders, rating agencies, and legal counsel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Work with Jane and the team.</h2>
            <p className="cta-desc">
              Whether you are planning a new development, restructuring existing debt, or exploring strategic options, our team is ready to help.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="hero-cta">
                Start a conversation
              </Link>
              <Link href="/about#team" className="hero-cta-secondary">
                Meet the full team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
