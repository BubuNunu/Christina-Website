import { Box, Typography } from '@mui/material';
import PageContainer from '@/components/PageContainer';
import type { CaseStudyContent } from '@/components/caseStudy/types';

// Text and numbers come from Figma frame 2:2387; pictures are the designer's Drive exports.

// Figma 2:2542: green rounded banner (1280x213, radius 24, #006937) with the
// "Main Title" text layer 2:2544 (SemiBold 40, letter-spacing -1%, white, centred).
const RebrandBanner = () => (
  <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
    <Box
      sx={{
        minHeight: { xs: 140, md: 213 },
        borderRadius: '24px',
        bgcolor: '#006937',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, md: 18 },
        py: 4,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 28, md: 40 },
          fontWeight: 600,
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        WM Rebrand &amp; First design system
      </Typography>
    </Box>
  </PageContainer>
);

const wmDesignSystem: CaseStudyContent = {
  tags: ['Design system', 'Mobile + APP + DSM'],
  hero: {
    src: 'images/wm-design-system/hero.webp',
    alt: 'WM.com Roll-off Dumpsters page above the design system’s typography, color, layer and text color style sheets',
  },
  blocks: [
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'About WM & My Role',
      body: (
        // Figma 2:2406 sets this body in full white, not the usual white@0.8.
        <Box sx={{ color: '#ffffff' }}>
          <p>
            WM is North America’s leading provider of waste management and environmental services, serving 21M+
            customers with 130K+ daily digital visits.
          </p>
          <p>
            During my 2 years at WM, I focused on web and mobile product design, design systems, and documentation.
            This case study highlights my work redesigning the homepage experience for residential and commercial
            customers.
          </p>
          <p>
            I also helped build <Box component="strong" sx={{ color: '#ebf75e !important' }}>WM’s first design system</Box>
            <strong>. </strong>At the time, there was no centralized system—components were manually maintained across
            designers, creating inconsistencies and making updates difficult to scale.
          </p>
        </Box>
      ),
    },
    {
      kind: 'stats',
      items: [
        { value: '21M', label: 'Users in North America' },
        { value: '130K', label: 'Daily visit' },
        { value: '0', label: 'Toolkit in 2020' },
        { value: '3', label: 'People on DSM' },
      ],
    },
    {
      kind: 'section',
      eyebrow: 'Problem discovery',
      title: 'Hearing from our users',
      body: (
        <>
          <p>
            “There is no way to <strong>identify which industry</strong> on the Business Waste Pickup Page.”
          </p>
          <p>
            “There is no way to <strong>input address and search available services</strong> on residential and
            business waste pick up pages.”
          </p>
        </>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/prd-request.webp', alt: 'Request from PRD: the old Residential and Business waste pickup pages, with requests to add First Name and Last Name fields next to the address field for residential, and an Industry Picker for commercial' },
    {
      kind: 'section',
      eyebrow: 'Solution',
      title: 'From User Feedback to Validated Design',
      body: (
        <>
          <p>
            With direct user feedback captured in the PRD, I translated key pain points into two concepts for the
            “Check Availability” experience: a filter-first approach and a side-by-side comparison.
          </p>
          <p>
            In testing, 90% of users preferred the side-by-side experience, which I then scaled across both
            residential and business pickup flows.
          </p>
        </>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/ab-test.webp', alt: 'A/B testing, 90% of users prefer option B: option A filters by industry before the address search, option B puts business type and address side by side' },
    { kind: 'figure', src: 'images/wm-design-system/design-solutions.webp', alt: 'Design solutions: the new Residential page with address and name fields, and the new Business page with an industry dropdown next to the address field' },
    {
      kind: 'section',
      eyebrow: 'Design',
      title: (
        <>
          Scaling the Experience
          <br />
          to the Homepage
        </>
      ),
      body: (
        <>
          <p>
            6 months after launch, user feedback revealed a new opportunity:{' '}
            <strong>why not bring the Service Address tool directly to the homepage?</strong>
          </p>
          <p>
            Since WM.com’s Homepage is the most-visited page on the site, I expanded the experience there, making
            service discovery more accessible. The change drove a <strong>2.1% increase</strong> in engagement within
            3 months.
          </p>
        </>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/steps-flow.webp', alt: '7 steps to 3 steps: the old flow from wm.com through the Business page to the Services Address Tool, versus the new flow that starts at the Services Address Tool on the homepage' },
    { kind: 'figure', src: 'images/wm-design-system/homepage-comparison.webp', alt: 'Homepage comparison validated with 40 users: the old homepage, where 7 steps lead to the e-commerce funnel, preferred by 25%, and the new homepage with the service address tool, 3 steps, preferred by 75%' },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: (
        <>
          2.1% increase in
          <br />
          Engagement
        </>
      ),
      body: (
        <>
          <p>
            I partnered with our researcher and validate the new home. we found that <strong>75% </strong>users (40
            participants) like our new homepage design with the service address tool.
          </p>
          <p>
            The change drove a <strong>2.1% increase</strong> in engagement within 3 months.
          </p>
        </>
      ),
    },
    { kind: 'custom', content: <RebrandBanner /> },
    {
      kind: 'section',
      eyebrow: 'Follow up',
      title: (
        <>
          Building WM’s First
          <br />
          Design System
        </>
      ),
      body: (
        <>
          <p>
            In 2020, WM had no unified design system across web, mobile, or email, requiring designers to manually
            maintain and update components across files.
          </p>
          <p>
            I partnered with 2 designers to build WM’s first 0→1 design system, aligning it with the company’s new
            brand and creating reusable components across platforms. I later applied the system to redesign WM.com’s
            homepage, bringing the new brand and design language to life at scale.
          </p>
        </>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/components.webp', alt: 'I built 50+ components, 101 in total: the homepage hero components in the Sketch library, and the typography, color, layer and text color style sheets' },
    { kind: 'figure', src: 'images/wm-design-system/documentation.webp', alt: 'I documented each component: a component documentation page with usage rules and references, and the full list of documented components' },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: 'From Design System to Launch',
      body: (
        <>
          <p>
            After building and documenting the new Sketch design system, I applied it to redesign the{' '}
            <strong>WM.com homepage</strong> across web and mobile, bringing the new brand to life consistently.
          </p>
          <p>
            The redesigned homepage launched on 11/15/2021. In post-launch research with 40 participants, 75%
            preferred the new homepage, including the integrated Service Address experience.
          </p>
        </>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/new-homepage.webp', alt: 'WM homepage with new branding and web and mobile alignment: desktop and mobile homepages with the Shop Waste Services address tool, plus Recycle Right and business pickup pages' },
    {
      kind: 'stats',
      items: [
        { value: '0> 1', label: 'Design system' },
        { value: '101', label: 'Components' },
        { value: '75%', label: 'Users prefer my design' },
        { value: '2.1%', label: 'Engagement increase' },
      ],
    },
  ],
};

export default wmDesignSystem;
