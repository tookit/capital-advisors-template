import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Industries | Capital Advisors',
  description:
    'Deep expertise across senior housing, education, and healthcare — the industries where capital decisions shape decades.',
};

const industries = [
  {
    name: 'Senior Housing',
    image: 'https://picsum.photos/seed/senior-living/800/500',
    description:
      'From independent living and assisted living to continuing care retirement communities, we understand the unique capital needs of senior housing providers. Our experience spans construction financing, permanent debt placement, refinancing, and strategic capital planning for communities at every stage of development.',
    highlights: [
      'Construction and bridge financing',
      'Permanent debt placement',
      'CCRC capital stack structuring',
      'Refinancing and restructuring',
      'Strategic capital planning',
    ],
  },
  {
    name: 'Education',
    image: 'https://picsum.photos/seed/charter-education/800/500',
    description:
      'Helping charter schools, private schools, and educational organizations secure facility financing and growth capital. We navigate the complexities of tax-exempt bond markets, credit enhancement, and facility planning so educators can focus on what matters most: student outcomes.',
    highlights: [
      'Tax-exempt bond financing',
      'Facility acquisition and expansion',
      'Credit enhancement strategies',
      'Working capital solutions',
      'Growth and expansion planning',
    ],
  },
  {
    name: 'Healthcare',
    image: 'https://picsum.photos/seed/healthcare-systems/800/500',
    description:
      'Strategic capital planning and financing for hospitals, health systems, and healthcare organizations navigating complex regulatory and market environments. We bring objective analysis to capital structure decisions, helping leadership teams and boards balance mission with financial sustainability.',
    highlights: [
      'Hospital and health system financing',
      'Mergers and acquisitions',
      'Debt restructuring',
      'Equipment and facility financing',
      'Regulatory and rating agency strategy',
    ],
  },
];

const additionalSectors = [
  {
    name: 'Nonprofit Institutions',
    description:
      'Beyond our core industries, we serve a broad range of mission-driven nonprofit organizations that access the tax-exempt capital markets, including community service organizations, cultural institutions, and faith-based organizations.',
  },
  {
    name: 'Government & Municipal',
    description:
      'We advise municipal entities on capital planning, debt issuance, and ongoing debt management, helping public sector borrowers achieve cost-effective financing while maintaining financial flexibility.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="industries" />
      <main>
        <section className="subpage-hero industries-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">Industries</p>
              <h1 className="hero-headline">
                Deep expertise where it matters most.
              </h1>
              <p className="hero-subhead">
                We concentrate on sectors where capital decisions have lasting impact — senior housing, education, healthcare, and mission-driven organizations.
              </p>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/industries-overview/800/620"
                alt="Diverse institutional and community settings"
                className="hero-image"
              />
              <div className="hero-stat-card">
                3 core sectors
                <span>Specialized industry focus</span>
              </div>
            </div>
          </div>
        </section>

        {industries.map((industry, index) => (
          <section
            className="section reveal"
            key={industry.name}
            id={industry.name.toLowerCase().replace(/\s+/g, '-')}
          >
            <div className="editorial-split">
              <div>
                <p className="section-label">{`0${index + 1}`}</p>
                <h2 className="section-title">{industry.name}</h2>
              </div>
              <div className="content-stack">
                <p>{industry.description}</p>
              </div>
            </div>
            <div style={{ marginTop: '48px' }}>
              <img
                src={industry.image}
                alt={`${industry.name} sector`}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '420px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  background: 'var(--green-surface)',
                }}
                loading="lazy"
              />
            </div>

            <div className="case-chip-row" style={{ marginTop: '32px' }}>
              {industry.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </section>
        ))}

        <section className="dark-band reveal">
          <div className="dark-band-inner">
            <div className="section-header">
              <p className="section-label">Additional Sectors</p>
              <h2 className="section-title">Broader capital advisory for mission-driven borrowers.</h2>
            </div>
            <div className="why-grid">
              {additionalSectors.map((sector) => (
                <div className="why-feature" key={sector.name}>
                  <h3>{sector.name}</h3>
                  <p>{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Discuss your industry&apos;s capital landscape.</h2>
            <p className="cta-desc">
              Every sector has unique financing dynamics. Let us bring focused experience to your capital planning conversation.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="hero-cta">
                Start a conversation
              </Link>
              <Link href="/case-studies" className="hero-cta-secondary">
                View case studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
