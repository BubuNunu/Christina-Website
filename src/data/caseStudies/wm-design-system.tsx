import type { CaseStudyContent } from '@/components/caseStudy/types';

// Text and numbers come from Figma frame 2:2387. Picture frames (2:2474, 2:2496, 2:2510,
// 2:2542, 2:2545, 2:2549, 2:2555) and the hero group 2:2401 still need to be exported:
// the Figma MCP call limit was reached before they could be captured.
const wmDesignSystem: CaseStudyContent = {
  tags: ['Design system', 'Mobile + APP + DSM'],
  hero: {
    src: 'images/home/wm-design-system.webp',
    alt: 'WM.com homepage designs and design system type styles',
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
