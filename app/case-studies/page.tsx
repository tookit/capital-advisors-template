import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';
import { caseStudies } from './data';

export const metadata: Metadata = {
  title: 'Case Studies | Capital Advisors',
  description:
    'Explore sample case studies across senior housing, education, healthcare and nonprofit financing.',
};

const featuredStudies = caseStudies.filter((study) => study.detailAvailable);
const remainingStudies = caseStudies.filter((study) => !study.detailAvailable);

export default function CaseStudiesPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="cases" />
      <main>
        <section className="subpage-hero case-index-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">Case Studies</p>
              <h1 className="hero-headline">Capital solutions shaped around real borrower needs.</h1>
              <p className="hero-subhead">
                A sample library of client work across senior housing, charter schools, healthcare and nonprofit mission-driven financing.
              </p>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/capital-case-studies/800/620"
                alt="Institutional planning documents and financial reports"
                className="hero-image"
              />
              <div className="hero-stat-card">
                {caseStudies.length}
                <span>Sample engagements</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="section-header">
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">Detailed examples of advisory work and financing structure.</h2>
          </div>
          <div className="case-index-grid">
            {featuredStudies.map((study) => (
              <article className="case-index-card case-index-card-featured" key={study.slug}>
                <div className="case-logo-row">
                  <div className="case-logo-mark">
                    {study.clientLogo ? (
                      <img src={study.clientLogo.src} alt={study.clientLogo.alt} />
                    ) : (
                      <span>{study.title.slice(0, 2)}</span>
                    )}
                  </div>
                  <p className="case-index-tag">{study.category}</p>
                </div>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="case-chip-row">
                  {study.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
                <Link href={`/case-studies/${study.slug}`} className="case-index-link">
                  Read case study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="case-library reveal">
          <div className="case-library-inner">
            <div className="section-header">
              <p className="section-label">Case Library</p>
              <h2 className="section-title">Additional client examples ready for content migration.</h2>
            </div>
            <div className="case-library-grid">
              {remainingStudies.map((study) => (
                <article className="case-library-card" key={study.slug}>
                  <div className="case-library-card-top">
                    <div className="case-logo-mark case-logo-mark-small">
                      {study.clientLogo ? (
                        <img src={study.clientLogo.src} alt={study.clientLogo.alt} />
                      ) : (
                        <span>{study.title.slice(0, 2)}</span>
                      )}
                    </div>
                    <p>{study.category}</p>
                  </div>
                  <h3>{study.title}</h3>
                  <span>{study.client}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
