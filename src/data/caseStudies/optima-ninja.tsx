import type { CaseStudyContent } from '@/components/caseStudy/types';

const optimaNinja: CaseStudyContent = {
  tags: ['0→1 Products', 'solo designer'],
  hero: { src: 'images/optima-ninja/hero.webp', alt: 'Optima Ninja company website shown on a phone and a tablet' },
  blocks: [
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'About Optima Ninja & My Role',
      body: (
        <p>
          Optima Ninja is a Houston-based startup providing design and development services for small businesses. As
          the company’s solo UI/UX designer, I owned the end-to-end design across client and company experiences. I
          designed 3 generations of the company website, reaching 1,000+ daily clicks, ranking Top 5 in
          Chinese-language SEO, and driving 120% more qualified leads. This website also nominated by Awwwards in 2019.
        </p>
      ),
    },
    {
      kind: 'stats',
      items: [
        { value: '1', label: 'Designer' },
        { value: '3', label: 'Company website' },
        { value: '1K', label: 'Daily clicks' },
        { value: '120%', label: 'more qualified leads' },
      ],
    },
    {
      kind: 'section',
      eyebrow: 'Problem discovery',
      title: 'Starting from 0→1',
      body: (
        <p>
          When I joined Optima Ninja, the company had no website or digital sales experience. Customers had to call or
          email to understand services and request pricing, creating friction and contributing to a low conversion
          rate. This led to our core design challenge: How might we build an engaging digital experience that makes
          services easier to discover and increases conversion?
        </p>
      ),
    },
    // Figma banners 2:2677 and 2:2718 (1280x213 title cards) have no export in the Drive folder.
    {
      kind: 'figure',
      src: 'images/optima-ninja/research.webp',
      alt: 'Local competitor research collage next to a customer journey map from interviews with 20 customers, with pain points at consulting services and viewing case studies',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/service-menu.webp',
      alt: 'Three versions of the service menu compared side by side, with a Hotjar heat map that informed the iterations',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/pricing-page.webp',
      alt: 'Three versions of the pricing page compared: plan cards, an investment estimate calculator, and a subscription pricing table',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/pricing-final.webp',
      alt: 'Final pricing solution: a subscription pricing table comparing Simple, Pro and Enterprise plans feature by feature',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/case-studies-v1.webp',
      alt: 'First version of the case studies page, a grid of project cards opening a project detail page; only 5% of users clicked it',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/case-studies-research.webp',
      alt: 'User research comparing three case studies layouts, Design A, B and C, with a 10-participant vote table where Design C won',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/case-studies-final.webp',
      alt: 'Final case studies page: first and second versions next to the final version with a side navigation and project detail view',
    },
    {
      kind: 'section',
      eyebrow: 'More things',
      title: 'Building the Foundation Beyond the Website',
      body: (
        <p>
          Beyond launching the website, I established Optima Ninja’s first design system and brand guidelines,
          creating a consistent visual identity across the company. I also designed a client and task management
          platform that enabled customers to manage their digital services while helping internal teams manage client
          information, support tickets, tasks, and invoices—all in one place.
        </p>
      ),
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/design-system.webp',
      alt: 'Optima Ninja design system overview: typography, colors, UI components, iconography, illustrations and responsive layouts',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/client-portal.webp',
      alt: 'Client and task management platform showing open and history support tickets with status, date, timer and actions',
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/logo-painting.webp',
      alt: 'Fun fact: two office photos, painting the Optima Ninja logo on the wall and the team waving in front of the finished logo',
    },
  ],
};

export default optimaNinja;
