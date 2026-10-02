import type { CaseStudyContent } from '@/components/caseStudy/types';

const optimaNinja: CaseStudyContent = {
  tags: ['0→1 Products', 'solo designer'],
  hero: { src: 'images/optima-ninja/hero.webp', alt: 'Optima Ninja company website shown on desktop and mobile' },
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
    // Figures for Figma nodes 2:2636, 2:2677, 2:2680, 2:2718, 2:2721, 2:2734 and 2:2743 go here
    // (not captured: Figma MCP rate limit).
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
    // Figures for Figma nodes 2:2761, 2:2770 and 2:2774 go here (not captured: Figma MCP rate limit).
  ],
};

export default optimaNinja;
