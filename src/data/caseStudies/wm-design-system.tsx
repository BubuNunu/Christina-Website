import type { CaseStudyContent } from '@/components/caseStudy/types';

// Text and numbers come from Figma frame 2:2387; pictures are the designer's Drive exports.
// TODO: frame 2:2542 (1280x213 banner with a "Main Title" text layer, between the second
// 'Outcome' and 'Follow up' sections) has no export in Drive and its text isn't cached.
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
        <p>
          WM is North America’s leading provider of waste management and environmental services, serving 21M+
          customers with 130K+ daily digital visits. During my 2 years at WM, I focused on web and mobile product
          design, design systems, and documentation. This case study highlights my work redesigning the homepage
          experience for residential and commercial customers. I also helped build WM’s first design system. At the
          time, there was no centralized system—components were manually maintained across designers, creating
          inconsistencies and making updates difficult to scale.
        </p>
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
          <p>“There is no way to identify which industry on the Business Waste Pickup Page.”</p>
          <p>
            “There is no way to input address and search available services on residential and business waste pick
            up pages.”
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
        <p>
          With direct user feedback captured in the PRD, I translated key pain points into two concepts for the
          “Check Availability” experience: a filter-first approach and a side-by-side comparison. In testing, 90% of
          users preferred the side-by-side experience, which I then scaled across both residential and business
          pickup flows.
        </p>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/ab-test.webp', alt: 'A/B testing, 90% of users prefer option B: option A filters by industry before the address search, option B puts business type and address side by side' },
    { kind: 'figure', src: 'images/wm-design-system/design-solutions.webp', alt: 'Design solutions: the new Residential page with address and name fields, and the new Business page with an industry dropdown next to the address field' },
    {
      kind: 'section',
      eyebrow: 'Design',
      title: 'Scaling the Experience to the Homepage',
      body: (
        <p>
          6 months after launch, user feedback revealed a new opportunity: why not bring the Service Address tool
          directly to the homepage? Since WM.com’s Homepage is the most-visited page on the site, I expanded the
          experience there, making service discovery more accessible. The change drove a 2.1% increase in engagement
          within 3 months.
        </p>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/steps-flow.webp', alt: '7 steps to 3 steps: the old flow from wm.com through the Business page to the Services Address Tool, versus the new flow that starts at the Services Address Tool on the homepage' },
    { kind: 'figure', src: 'images/wm-design-system/homepage-comparison.webp', alt: 'Homepage comparison validated with 40 users: the old homepage, where 7 steps lead to the e-commerce funnel, preferred by 25%, and the new homepage with the service address tool, 3 steps, preferred by 75%' },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: '2.1% increase in Engagement',
      body: (
        <p>
          I partnered with our researcher and validate the new home. we found that 75% users (40 participants) like
          our new homepage design with the service address tool. The change drove a 2.1% increase in engagement
          within 3 months.
        </p>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Follow up',
      title: 'Building WM’s First Design System',
      body: (
        <p>
          In 2020, WM had no unified design system across web, mobile, or email, requiring designers to manually
          maintain and update components across files. I partnered with 2 designers to build WM’s first 0→1 design
          system, aligning it with the company’s new brand and creating reusable components across platforms. I
          later applied the system to redesign WM.com’s homepage, bringing the new brand and design language to life
          at scale.
        </p>
      ),
    },
    { kind: 'figure', src: 'images/wm-design-system/components.webp', alt: 'I built 50+ components, 101 in total: the homepage hero components in the Sketch library, and the typography, color, layer and text color style sheets' },
    { kind: 'figure', src: 'images/wm-design-system/documentation.webp', alt: 'I documented each component: a component documentation page with usage rules and references, and the full list of documented components' },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: 'From Design System to Launch',
      body: (
        <p>
          After building and documenting the new Sketch design system, I applied it to redesign the WM.com homepage
          across web and mobile, bringing the new brand to life consistently. The redesigned homepage launched on
          11/15/2021. In post-launch research with 40 participants, 75% preferred the new homepage, including the
          integrated Service Address experience.
        </p>
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
