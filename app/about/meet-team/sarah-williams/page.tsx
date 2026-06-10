import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../../../components/RevealOnScroll';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteNav } from '../../../components/SiteNav';

export const metadata: Metadata = {
  title: 'Sarah Williams | Capital Advisors',
  description:
    'Sarah Williams, Managing Director at Capital Advisors, specializes in mergers, acquisitions, and strategic restructurings for nonprofit institutions.',
};

export default function SarahWilliamsPage() {
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
              <p className="hero-eyebrow">Managing Director</p>
              <h1 className="hero-headline">Sarah Williams</h1>
              <p className="hero-subhead">
                Specializing in mergers, acquisitions, and strategic restructurings that help nonprofit boards navigate complex decisions with confidence.
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
                SW
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <p className="section-label">Background</p>
              <h2 className="section-title">M&A and restructuring expertise for mission-driven organizations.</h2>
            </div>
            <div className="content-stack">
              <p>
                Sarah Williams leads the firm&apos;s strategic transaction practice, bringing more than fifteen years of experience in mergers, acquisitions, and financial restructurings for nonprofit and mission-driven organizations.
              </p>
              <p>
                Her work spans the full transaction lifecycle — from strategic assessment and stakeholder alignment through due diligence, negotiation, and post-close integration. Sarah has particular expertise in transactions where mission preservation is a central consideration, including nonprofit-to-nonprofit mergers, acquisitions out of bankruptcy, and complex affiliation structures.
              </p>
              <p>
                Before joining the firm, Sarah practiced as a transaction advisor at a leading consulting firm and served as in-house strategy lead at a major nonprofit health system. She holds an MBA and a graduate degree in public policy, bringing both financial rigor and a deep understanding of the governance dynamics unique to mission-driven institutions.
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
                <h3>Mergers & Acquisitions</h3>
                <p>Advising on strategic combinations, affiliations, and acquisitions that strengthen mission delivery while preserving organizational identity.</p>
              </div>
              <div className="why-feature">
                <h3>Financial Restructuring</h3>
                <p>Guiding organizations through complex debt restructurings with a focus on long-term operating flexibility and mission alignment.</p>
              </div>
              <div className="why-feature">
                <h3>Board Advisory & Governance</h3>
                <p>Helping boards understand strategic alternatives, evaluate transaction risks, and fulfill their fiduciary responsibilities with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Work with Sarah and the team.</h2>
            <p className="cta-desc">
              Whether you are considering a strategic transaction, navigating a restructuring, or exploring affiliation options, our team is ready to help.
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
