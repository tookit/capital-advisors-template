import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RevealOnScroll } from '../../components/RevealOnScroll';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteNav } from '../../components/SiteNav';
import { caseStudies, getCaseStudy } from '../data';

type CaseStudyDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies
    .filter((study) => study.detailAvailable)
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study || !study.detailAvailable) {
    return {
      title: 'Case Study | Capital Advisors',
    };
  }

  return {
    title: `${study.title} | Capital Advisors`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study || !study.detailAvailable) {
    notFound();
  }

  return (
    <>
      <RevealOnScroll />
      <SiteNav active="cases" />
      <main>
        <section className="case-detail-hero reveal">
          <div>
            <Link href="/case-studies" className="case-back-link">
              Case Studies
            </Link>
            <p className="hero-eyebrow">{study.category}</p>
            <h1 className="hero-headline">{study.title}</h1>
            <p className="hero-subhead">{study.summary}</p>
          </div>
          <aside className="case-detail-aside">
            <p>Client</p>
            <h2>{study.client}</h2>
            <div className="case-chip-row">
              {study.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="section reveal">
          <div className="case-story-grid">
            <article>
              <p className="section-label">Challenge</p>
              <h2 className="section-title">The borrower needed more than capital access.</h2>
              <p>{study.challenge}</p>
            </article>
            <article>
              <p className="section-label">Solution</p>
              <h2 className="section-title">Independent guidance shaped the financing path.</h2>
              <p>{study.solution}</p>
            </article>
            <article>
              <p className="section-label">Outcome</p>
              <h2 className="section-title">A structure aligned to mission and long-term flexibility.</h2>
              <p>{study.outcome}</p>
            </article>
          </div>
        </section>

        <section className="cta-section reveal">
          <div className="cta-inner">
            <h2 className="cta-title">Discuss a similar financing challenge.</h2>
            <p className="cta-desc">
              We can help evaluate structure, risk, flexibility and capital access for nonprofit borrowers.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="hero-cta">
                Contact Us
              </Link>
              <Link href="/case-studies" className="hero-cta-secondary">
                View all case studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
