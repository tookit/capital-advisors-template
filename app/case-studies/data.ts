export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  client: string;
  clientLogo?: {
    src: string;
    alt: string;
  };
  sourcePath: string;
  summary: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  highlights: string[];
  detailAvailable: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'the-village-at-orchard-ridge',
    title: 'The Village at Orchard Ridge',
    category: 'Senior Housing',
    client: 'National Lutheran Communities & Services',
    clientLogo: {
      src: '/assets/clients/ncr_square.png',
      alt: 'National Lutheran Communities & Services logo',
    },
    sourcePath: '/clients/case-studies/the-village-at-orchard-ridge',
    summary:
      "A start-up continuing care retirement community required a complete capital plan to support development, long-term flexibility and organizational mission.",
    challenge:
      "The organization needed to finance a major senior living campus while balancing construction risk, debt structure, covenant flexibility and future operating stability.",
    solution:
      "We helped evaluate the capital plan, coordinate financing sources and structure debt around the client's long-term needs rather than a one-size-fits-all lending product.",
    outcome:
      "The resulting financing approach supported campus development while preserving flexibility for future boards and management teams.",
    highlights: ['Start-up CCRC campus', 'Senior housing financing', 'Capital stack structuring'],
    detailAvailable: true,
  },
  {
    slug: 'south-franklin-circle',
    title: 'South Franklin Circle',
    category: 'Senior Housing',
    client: 'Judson Services, Inc.',
    clientLogo: {
      src: '/assets/clients/john_knox_square.jpg',
      alt: 'John Knox Village logo',
    },
    sourcePath: '/clients/case-studies/south-franklin-circle',
    summary:
      'A bank debt restructuring required careful negotiation, objective analysis and a financing structure that protected operating flexibility.',
    challenge:
      'The client needed to navigate lender relationships, refinancing alternatives and long-term debt-service considerations during a sensitive restructuring process.',
    solution:
      'We served as an independent advisor, helping compare options, manage risk and shape terms around the client&apos;s financial position.',
    outcome:
      "The restructuring preserved operating flexibility and created a clearer debt path for the organization.",
    highlights: ['Bank debt restructuring', 'Independent financial advice', 'Senior living community'],
    detailAvailable: true,
  },
  {
    slug: 'saving-non-profit-missions',
    title: 'Saving Non-Profit Missions',
    category: 'Non-Profit',
    client: 'Not-for-profit senior living organization',
    clientLogo: {
      src: '/assets/clients/community-supports.gif',
      alt: 'Community Supports logo',
    },
    sourcePath: '/clients/case-studies/saving-non-profit-missions',
    summary:
      'We advised a not-for-profit through the acquisition of a New York CCRC out of bankruptcy, helping preserve the community mission.',
    challenge:
      'The transaction required a sensitive balance of mission preservation, resident protection, bankruptcy considerations and feasible acquisition financing.',
    solution:
      'We supported the client with transaction advice, financing strategy and an objective view of the risks and obligations involved.',
    outcome:
      'The acquisition helped protect a nonprofit mission while giving the community a more stable future ownership path.',
    highlights: ['Bankruptcy acquisition', 'Mission preservation', 'Nonprofit senior living'],
    detailAvailable: true,
  },
  {
    slug: '230m-multi-facility-financing-program',
    title: '$230M Multi-Facility Financing Program',
    category: 'Program Financing',
    client: 'Senior living provider',
    clientLogo: {
      src: '/assets/clients/bethel_square.jpg',
      alt: 'Bethel logo',
    },
    sourcePath: '/clients/case-studies/230m-multi-facility-financing-program',
    summary:
      "A multi-facility financing program supported a senior living provider's growth and capital planning needs.",
    highlights: ['$230M program', 'Multi-facility financing', 'Growth capital'],
    detailAvailable: false,
  },
  {
    slug: 'benedictine-health-system',
    title: 'Benedictine Health System',
    category: 'Healthcare',
    client: 'Benedictine Health System',
    sourcePath: '/clients/case-studies/benedictine-health-system',
    summary:
      'A healthcare financing engagement focused on structured capital access for a mission-driven organization.',
    highlights: ['Healthcare', 'Capital access', 'Mission-driven borrower'],
    detailAvailable: false,
  },
  {
    slug: 'benedictine-st-catherines',
    title: "Benedictine St. Catherine's",
    category: 'Healthcare',
    client: "Benedictine St. Catherine's",
    sourcePath: '/clients/case-studies/benedictine-st-catherines',
    summary:
      'A nonprofit healthcare and senior services borrower required advisory support around long-term financing decisions.',
    highlights: ['Healthcare', 'Senior services', 'Advisory support'],
    detailAvailable: false,
  },
  {
    slug: 'kensington-park',
    title: 'Kensington Park',
    category: 'Senior Housing',
    client: 'Kensington Park',
    sourcePath: '/clients/case-studies/kensington-park',
    summary:
      'A senior housing engagement centered on capital planning, financing flexibility and borrower-specific debt structure.',
    highlights: ['Senior housing', 'Debt structure', 'Capital planning'],
    detailAvailable: false,
  },
  {
    slug: 'connections-education-center-palm-beach',
    title: 'Connections Education Center of Palm Beach County',
    category: 'Education',
    client: 'Connections Education Center of Palm Beach County',
    sourcePath: '/clients/case-studies/connections-education-center-palm-beach',
    summary:
      'An education-sector financing case focused on access to capital for facilities and organizational growth.',
    highlights: ['Education', 'Facility financing', 'Growth capital'],
    detailAvailable: false,
  },
  {
    slug: 'jacksonville-school-for-autism',
    title: 'Jacksonville School for Autism',
    category: 'Education',
    client: 'Jacksonville School for Autism',
    sourcePath: '/clients/case-studies/jacksonville-school-for-autism',
    summary:
      'A specialized school required capital guidance to support mission-centered facilities and service delivery.',
    highlights: ['Education', 'Specialized school', 'Mission-centered financing'],
    detailAvailable: false,
  },
  {
    slug: 'apex-academy',
    title: 'Apex Academy',
    category: 'Education',
    client: 'Apex Academy',
    sourcePath: '/clients/case-studies/apex-academy',
    summary:
      'A charter school financing engagement supporting facility needs and long-term educational operations.',
    highlights: ['Charter school', 'Facilities', 'Tax-exempt market'],
    detailAvailable: false,
  },
  {
    slug: 'rhodes-school',
    title: 'Rhodes School',
    category: 'Education',
    client: 'Rhodes School',
    sourcePath: '/clients/case-studies/rhodes-school',
    summary:
      'A school financing case involving borrower-specific advisory support and access to capital markets.',
    highlights: ['School financing', 'Borrower advisory', 'Capital access'],
    detailAvailable: false,
  },
  {
    slug: 'seeing-better',
    title: 'Seeing Better',
    category: 'Healthcare',
    client: 'Healthcare organization',
    sourcePath: '/clients/case-studies/seeing-better',
    summary:
      'A healthcare case study focused on financing guidance for an organization pursuing stronger long-term stability.',
    highlights: ['Healthcare', 'Financial advisory', 'Long-term stability'],
    detailAvailable: false,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
