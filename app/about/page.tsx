import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'About | Capital Advisors',
  description:
    'Learn how our team provides objective, independent financial guidance for nonprofit borrowers and their boards.',
};

const approachTraits = [
  'Close collaboration',
  'A willingness and ability to innovate',
  'Professional guidance through a complex process',
  'Hands-on service',
  'An unwavering commitment to ethical business practices',
  'Open, timely and honest communication',
];

const benefits = [
  'More-efficient access to the tax-exempt debt capital market',
  'Greater certainty of financing',
  'Opportunity for substantially lower interest costs over the life of your debt',
  'Debt terms crafted to your particular situation',
];

const teamMembers = [
  {
    name: 'Jane Mitchell',
    title: 'Managing Partner',
    initials: 'JM',
    profile: '/about/meet-team/jane-mitchell',
    bio: 'With over two decades of experience in capital markets, Jane leads the firm\'s strategic advisory practice, specializing in complex financing structures for mission-driven organizations.',
  },
  {
    name: 'Robert Chen',
    title: 'Principal',
    initials: 'RC',
    profile: '/about/meet-team/robert-chen',
    bio: 'Robert brings deep expertise in tax-exempt and taxable financing solutions, having advised on over $5 billion in transactions across senior living, education, and healthcare sectors.',
  },
  {
    name: 'Sarah Williams',
    title: 'Managing Director',
    initials: 'SW',
    profile: '/about/meet-team/sarah-williams',
    bio: 'Sarah specializes in mergers, acquisitions, and strategic restructurings for nonprofit institutions, helping boards navigate complex financial decisions with confidence.',
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="about" />
      <main>
        <section className="subpage-hero about-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">About Us</p>
              <h1 className="hero-headline">
                Objective advice for decisions that shape decades.
              </h1>
              <p className="hero-subhead">
                For nonprofit borrowers who access capital markets only infrequently, choosing a financing plan can be daunting. We help boards make confident long-term decisions.
              </p>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/advisory-boardroom/800/620"
                alt="Advisory meeting in a professional boardroom"
                className="hero-image"
              />
              <div className="hero-stat-card">
                25+ years
                <span>Capital markets perspective</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <p className="section-label">Independent Perspective</p>
              <h2 className="section-title">Thoughtful financial solutions with your institution&apos;s mission at the center.</h2>
            </div>
            <div className="content-stack">
              <p>
                Board members have significant responsibility to make the right decisions today and avoid saddling future boards with the consequences of poor financial decisions.
              </p>
              <p>
                We seek to provide your institution with thoughtful, innovative and carefully conceived financial solutions. By offering an objective view, we can help you choose the best financing option for your organization and provide the professional help you need to have confidence in your institution&apos;s long-term financial stability.
              </p>
              <p>
                Many lenders have a financial incentive to commit you to debt products that benefit them. As an independent financial advisor, our incentive is to help you succeed.
              </p>
            </div>
          </div>
        </section>

        <section className="dark-band reveal">
          <div className="dark-band-inner">
            <div className="section-header">
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">A practical guide through complex borrowing decisions.</h2>
            </div>
            <div className="why-grid">
              <div className="why-feature">
                <p className="approach-number">01</p>
                <h3>Define precise needs</h3>
                <p>
                  We work closely with you and your board to define your organization&apos;s needs before structuring debt.
                </p>
              </div>
              <div className="why-feature">
                <p className="approach-number">02</p>
                <h3>Maximize flexibility</h3>
                <p>
                  The goal is financing that supports your long-term mission, with terms crafted around your situation.
                </p>
              </div>
              <div className="why-feature">
                <p className="approach-number">03</p>
                <h3>Stay objective</h3>
                <p>
                  We are independent, focused on helping you make the best choices rather than selling a lender&apos;s product.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="dual-list-grid">
            <div>
              <p className="section-label">How We Work</p>
              <h2 className="section-title">Guidance marked by clarity, service and ethical execution.</h2>
            </div>
            <div className="list-card">
              <h3>Our approach is characterized by</h3>
              <ul className="check-list">
                {approachTraits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="list-card list-card-accent">
              <h3>Your organization benefits from</h3>
              <ul className="check-list">
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="team-section reveal" id="team">
          <div className="team-section-inner">
            <div className="team-intro">
              <div>
                <p className="section-label">Meet the Team</p>
                <h2 className="section-title">Experienced advisors for long-cycle capital decisions.</h2>
              </div>
              <p>
                Our professionals combine extensive knowledge of the financing process for nonprofit institutions with a commitment to meeting the highest ethical standards.
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <article className="team-card" key={member.name}>
                  <div className="team-card-top">
                    <div className="team-avatar" aria-hidden="true">
                      {member.initials}
                    </div>
                    <div>
                      <h3>{member.name}</h3>
                      <p>{member.title}</p>
                    </div>
                  </div>
                  <p className="team-bio">{member.bio}</p>
                  <Link href={member.profile} className="team-link">
                    Read profile
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            <div className="team-panel">
              <div>
                <p className="section-label">Perspective</p>
                <h2 className="section-title">Guidance shaped by multiple market cycles.</h2>
                <p>
                  Individuals in our firm have been through business cycles for more than 25 years, giving us the perspective and knowledge to help you make the right long-term decisions in both good and difficult times.
                </p>
              </div>
              <Link href="/contact" className="hero-cta">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
