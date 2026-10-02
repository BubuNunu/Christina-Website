import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import type { CaseStudyContent } from '@/components/caseStudy/types';
import { Section } from '@/components/caseStudy/CaseStudyBlocks';
import PageContainer from '@/components/PageContainer';

const link = { target: '_blank', rel: 'noopener noreferrer' } as const;

// Figma text runs coloured #ef7e46 inside the solution banners.
const Highlight = ({ children }: { children: ReactNode }) => (
  <Box component="span" sx={{ color: '#ef7e46' }}>
    {children}
  </Box>
);

// Figma 2:2677 / 2:2718: 1280x213 navy title cards (radius 24) with a centred SemiBold 40 title.
const SolutionBanner = ({ children }: { children: ReactNode }) => (
  <PageContainer sx={{ py: { xs: 2, md: '56px' } }}>
    <Box
      sx={{
        minHeight: { md: 213 },
        bgcolor: '#142e70',
        borderRadius: '24px',
        px: { xs: 3, md: '144px' },
        py: { xs: 4, md: '52px' },
      }}
    >
      <Typography
        component="h2"
        sx={{
          maxWidth: 991,
          mx: 'auto',
          fontSize: { xs: 24, md: 40 },
          fontWeight: 600,
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          textAlign: 'center',
        }}
      >
        {children}
      </Typography>
    </Box>
  </PageContainer>
);

const optimaNinja: CaseStudyContent = {
  tags: ['0→1 Products', 'solo designer'],
  hero: { src: 'images/optima-ninja/hero.webp', alt: 'Optima Ninja company website shown on a phone and a tablet' },
  blocks: [
    {
      // Figma 2:2595 / 2:2593: unlike later sections, the eyebrow is #4d4d4d and the body is full white.
      kind: 'custom',
      content: (
        <Box sx={{ '& p.MuiTypography-root': { color: '#4d4d4d' } }}>
          <Section
            eyebrow="Introduction"
            title={
              <>
                About Optima Ninja <br />& My Role
              </>
            }
            body={
              <Box sx={{ color: '#ffffff' }}>
                <p>
                  Optima Ninja is a Houston-based startup providing design and development services for small
                  businesses. As the company’s solo UI/UX designer, I owned the end-to-end design across client and
                  company experiences.
                </p>
                <p>
                  I designed 3 generations of the company website, reaching 1,000+ daily clicks, ranking Top 5 in
                  Chinese-language SEO, and driving 120% more qualified leads.
                </p>
                <p>
                  This website also nominated by{' '}
                  <a href="https://www.awwwards.com/sites/optima-ninja" {...link}>
                    Awwwards
                  </a>{' '}
                  in 2019.
                </p>
              </Box>
            }
          />
        </Box>
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
        <>
          <p>
            When I joined Optima Ninja, the company had no website or digital sales experience. Customers had to call
            or email to understand services and request pricing, creating friction and contributing to a low
            conversion rate.
          </p>
          <p>
            This led to our core design challenge:{' '}
            <strong>
              How might we build an engaging digital experience that makes services easier to discover and increases
              conversion?
            </strong>
          </p>
        </>
      ),
    },
    {
      kind: 'figure',
      src: 'images/optima-ninja/research.webp',
      alt: 'Local competitor research collage next to a customer journey map from interviews with 20 customers, with pain points at consulting services and viewing case studies',
    },
    {
      kind: 'custom',
      content: (
        <SolutionBanner>
          Solution 1: By providing clear <Highlight>services menu</Highlight> and detailed{' '}
          <Highlight>service pages</Highlight> to meet users expectation
        </SolutionBanner>
      ),
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
      kind: 'custom',
      content: (
        <SolutionBanner>
          Solution 2: By providing <Highlight>detailed case studies</Highlight>
          <br />
          and real links to form users trust
        </SolutionBanner>
      ),
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
        <>
          <p>
            Beyond launching the website, I established <strong>Optima Ninja’s first design system</strong> and brand
            guidelines, creating a consistent visual identity across the company.
          </p>
          <p>
            I also designed a client and <strong>task management platform</strong> that enabled customers to manage
            their digital services while helping internal teams manage client information, support tickets, tasks, and
            invoices—all in one place.
          </p>
        </>
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
