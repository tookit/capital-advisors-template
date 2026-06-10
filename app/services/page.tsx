import type { Metadata } from 'next';
import Link from 'next/link';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SiteFooter } from '../components/SiteFooter';
import { SiteNav } from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Services | Capital Advisors',
  description:
    'Explore our services, including customized financing and financial advisory support for nonprofit borrowers.',
};

const financingBenefits = [
  'Preserve and facilitate your organization&apos;s mission through custom-tailored, commonsense covenants and creative bond structures.',
  'Just-in-time delivery of funding can generate large savings for new borrowing.',
  'Enhanced ability to prepay bonds can help reduce your institution&apos;s debt position.',
  'Maintain the opportunity to identify and take advantage of attractive capital market conditions.',
  'Potentially realize significantly lower interest costs and increased financial flexibility.',
];

const advisoryExpectations = [
  ['Increased efficiency', 'Small details can cost you big money. By focusing on those details, We helps minimize the costs of your financing.'],
  ['Innovation', 'We looks for new ways to make it possible for you to pursue your project with less debt.'],
  ['Fiduciary confidence', 'We helps your board determine whether financing is appropriately priced and structured.'],
  ['Customized solutions', 'Through close collaboration, financing is tailored to your needs, not those of your lenders.'],
  ['Risk management', 'We keeps you and your board informed about the risks of each financing option.'],
  ['Support for your mission', 'The financing option you select must uphold your organization&apos;s mission into perpetuity.'],
];

const approachSteps = [
  {
    title: 'Explore and consult',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" />
        <path d="M8 10h5M8 13h3" />
      </svg>
    ),
    description:
      'We starts by understanding your institution, priorities and decision context before recommending financing alternatives.',
  },
  {
    title: 'Examine existing conditions',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-7" />
        <path d="M17 6h1v1" />
      </svg>
    ),
    description:
      'The team reviews current debt structure and develops a plan around short- and long-term capital goals.',
  },
  {
    title: 'Discuss and advise',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v9H8l-4 4V6Z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    ),
    description:
      'Financing paths are compared collaboratively, with clear pros and cons instead of off-the-shelf product recommendations.',
  },
  {
    title: 'Execute',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13l4 4L20 5" />
        <path d="M5 21h14" />
      </svg>
    ),
    description:
      'Once a plan is selected, We helps implement it effectively and efficiently across the financing team.',
  },
  {
    title: 'Communicate and educate',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h10a4 4 0 0 1 4 4v10H9a4 4 0 0 1-4-4V5Z" />
        <path d="M9 9h6M9 12h6M9 15h3" />
      </svg>
    ),
    description:
      'Management, board members and stakeholders stay informed through open dialogue and practical progress updates.',
  },
  {
    title: 'Monitor and hold accountable',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0-9-9" />
        <path d="M3 16v5h5" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    description:
      'We coordinates vendors and holds every party, including itself, to high standards for the intended financing structure.',
  },
  {
    title: 'After the sale',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h4l3 8 4-16 3 8h2" />
        <path d="M4 20h16" />
      </svg>
    ),
    description:
      'Support continues as borrowers execute the operating plan and manage rating agencies, banks or creditors.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <RevealOnScroll />
      <SiteNav active="services" />
      <main>
        <section className="subpage-hero services-hero">
          <div className="subpage-hero-inner">
            <div className="subpage-hero-content reveal">
              <p className="hero-eyebrow">Services</p>
              <h1 className="hero-headline">
                Capital projects brought into focus.
              </h1>
              <p className="hero-subhead">
                We helps institutions access customized financing solutions and manage the complexities of the debt markets with objective financial advisory support.
              </p>
              <div>
                <Link href="#customized-financing" className="hero-cta">
                  Customized Financing
                </Link>
                <Link href="#financial-advisory" className="hero-cta-secondary">
                  Financial Advisory
                </Link>
              </div>
            </div>
            <div className="subpage-hero-visual reveal">
              <img
                src="https://picsum.photos/seed/capital-plan/800/620"
                alt="Capital planning documents on a conference table"
                className="hero-image"
              />
              <div className="hero-stat-card">
                2 core services
                <span>Financing and advisory</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="editorial-split">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Specialized support for nonprofit borrowers and fiduciary boards.</h2>
            </div>
            <div className="content-stack">
              <p>
                We can help bring your institution&apos;s capital projects into focus with access to customized financing solutions.
              </p>
              <p>
                We also provide financial advisory services, specializing in helping senior living, education and nonprofit hospital borrowers manage the complexities of the debt markets and helping their board members fulfill their fiduciary duties.
              </p>
            </div>
          </div>
        </section>

        <section className="service-approach reveal">
          <div className="service-approach-inner">
            <div className="service-approach-header">
              <div>
                <p className="section-label">Our Approach</p>
                <h2 className="section-title">A systematic process for understanding needs and tailoring the right financing strategy.</h2>
              </div>
              <p>
                Our work begins with institutional priorities, moves through analysis and execution, then continues after closing as the borrower carries out the operating plan.
              </p>
            </div>
            <div className="service-approach-grid">
              {approachSteps.map((step, index) => (
                <article className="service-approach-step" key={step.title}>
                  <div className="service-approach-icon">{step.icon}</div>
                  <p className="approach-number">Step {index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail reveal" id="customized-financing">
          <div className="service-detail-inner">
            <div className="service-detail-copy">
              <p className="section-label">Customized Financing</p>
              <h2 className="section-title">A financing plan built around your objectives, not a lender&apos;s template.</h2>
              <p>
                Given the importance and complexity of securing the right financial solutions, you need a partner who can consider your interests as you navigate the debt capital markets and evaluate the agendas and products of bond underwriters and banks.
              </p>
              <p>
                We can develop a customized financing plan for your institution, providing creative ideas for special financing structures that help you achieve your objectives, often at a lower overall cost and with less restrictive terms than those available from banks and other debt-market participants.
              </p>
              <p>
                We are more than a member of your financing team. We are your partner, invested in your long-term success and fully committed to your mission.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Benefits of customized financing</h3>
              <ul className="check-list">
                {financingBenefits.map((item) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal" id="financial-advisory">
          <div className="section-header">
            <p className="section-label">Financial Advisory</p>
            <h2 className="section-title">Objective guidance for capital needs, pricing, structure and risk.</h2>
          </div>
          <div className="advisory-intro">
            <p>
              The vast majority of large nonprofit or government borrowers, from universities and health systems to local governments, states and even countries, rely on financial advisors to help them manage capital needs and obtain more attractive terms.
            </p>
            <p>
              Shouldn&apos;t senior housing communities and other smaller nonprofit borrowers take equal advantage of the benefits a municipal financial advisor can provide?
            </p>
          </div>
          <div className="advisory-grid">
            {advisoryExpectations.map(([title, description], index) => (
              <div className="approach-item" key={title}>
                <p className="approach-number">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="approach-title">{title}</h3>
                <p className="approach-desc" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section reveal" id="contact">
          <div className="cta-inner">
            <h2 className="cta-title">Ready to discuss your capital needs?</h2>
            <p className="cta-desc">
              Whether you are planning a new development, restructuring existing debt or exploring strategic options, We can help evaluate the path forward.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="hero-cta">
                Contact us today
              </Link>
              <Link href="/contact" className="hero-cta-secondary">
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
