import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../../../components/RevealOnScroll';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteNav } from '../../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Robert Chen | Capital Advisors',
  description:
    'Robert Chen, Principal at Capital Advisors, brings deep expertise in tax-exempt and taxable financing solutions across senior living, education, and healthcare.',
};

export default function RobertChenPage() {
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
              <p className="hero-eyebrow">Principal</p>
              <h1 className="hero-headline">Robert Chen</h1>
              <p className="hero-subhead">
                Deep expertise in tax-exempt and taxable financing solutions, with over $5 billion in transactions across multiple sectors.
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
                RC
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <p className="section-label">Background</p>
              <h2 className="section-title">Depth of experience across capital structures.</h2>
            </div>
            <div className="content-stack">
              <p>
                Robert Chen brings deep technical expertise and market knowledge to every client engagement. With a career spanning investment banking and financial advisory, he has structured and executed transactions across the full spectrum of nonprofit capital markets.
              </p>
              <p>
                Robert&apos;s experience includes tax-exempt bond issuances, direct bank placements, credit enhancement strategies, and complex refinancing transactions. He has advised senior living communities, charter schools, hospitals, and nonprofit institutions on capital raises ranging from $5 million to over $500 million.
              </p>
              <p>
                Prior to joining the firm, Robert spent over a decade in public finance investment banking, where he gained hands-on experience with rating agency processes, credit analysis, and institutional investor relationships. He holds a degree in finance and maintains several professional certifications in municipal securities.
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
                <h3>Debt Structuring & Placement</h3>
                <p>Crafting financing structures that align with borrower objectives, from fixed-rate bonds to variable-rate and direct purchase solutions.</p>
              </div>
              <div className="why-feature">
                <h3>Rating Agency & Investor Relations</h3>
                <p>Managing the rating process and investor communications to achieve optimal pricing and terms for nonprofit borrowers.</p>
              </div>
              <div className="why-feature">
                <h3>Credit Enhancement & Risk Analysis</h3>
                <p>Evaluating credit enhancement options and helping clients understand risk tradeoffs across financing alternatives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Work with Robert and the team.</h2>
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
