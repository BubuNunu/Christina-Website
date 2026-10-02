import type { CaseStudyBlock, CaseStudyContent, Stat } from '@/components/caseStudy/types';

// Text copied from Figma frame 2:1575 (layer text via get_metadata). Paragraph breaks and
// bold spans could not be read because the Figma MCP quota was exhausted; re-check with
// get_design_context when quota is available.

const keyStats: Stat[] = [
  { value: '228K+', label: 'Microsoft employees' },
  { value: '5.7M', label: 'Monthly active users' },
  { value: '1,500+', label: 'Enterprises using' },
  { value: '30%', label: 'Engagement & retention' },
];

// The chart row inside "What are the problems?" (Figma node 2:1614, 1268x242) is not in the
// Drive export folder, so it is not shown yet.

const img = (name: string) => `images/ms-places/${name}.webp`;

const blocks: CaseStudyBlock[] = [
  {
    kind: 'section',
    eyebrow: 'Introduction',
    title: (
      <>
        What is Microsoft Places?
        <br />
        My Role
      </>
    ),
    body: (
      <>
        <p>
          Microsoft Places is an AI-powered connected workplace platform integrated across Microsoft 365, helping
          organizations navigate flexible work through better team coordination, modern workplace experiences, and
          smarter use of physical spaces.
        </p>
        <p>
          I was one of the 2 designers that started this project in 2022, as the product grew, I became the{' '}
          <strong>Mobile Design Lead</strong>, helping scale the team to 5 designers across 9 teams and leading the mobile experience from early
          exploration through launch and enterprise adoption 0 &gt; 1. I also worked on 10+ coordinate features &amp;
          design systems, make sure mobile &amp; web alignment.
        </p>
        <p>
          MS Places rolled out to 228K Microsoft employees and millions of enterprise users globally. Within the first
          three months of launch, it reached{' '}
          <strong>
            5.7M monthly active users, 2.54M weekly active users, and 1,500+ enterprise customers, with approximately
            30% engagement and retention.
          </strong>{' '}
          The launch also generated nearly 50 media stories worldwide, including coverage from{' '}
          <a
            href="https://www.computerworld.com/article/2106130/microsoft-looks-to-ease-the-shift-to-hybrid-work-with-its-places-app.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computerworld
          </a>
          ,{' '}
          <a
            href="https://www.theverge.com/2024/5/13/24155204/microsoft-places-ai-hybrid-office-feature"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Verge
          </a>
          , and <u style={{ fontWeight: 700 }}>PCWorld</u>.
        </p>
      </>
    ),
  },
  { kind: 'stats', items: keyStats },
  {
    kind: 'figure',
    src: img('intro-mockups'),
    alt: 'Microsoft Places on a phone and on the web, showing the Today view for Building 4 with who is working there and upcoming meetings',
  },
  {
    kind: 'section',
    eyebrow: 'Introduction',
    title: 'What are the problems?',
    body: (
      <p>
        The pandemic made the transition to office life challenging, as people found it hard to re-establish in-person
        connections and rebuild a sense of community at work. Microsoft Places aimed to bring people, schedules, work
        places, and spaces into one AI- powered experiences across Teams and Outlook. How might we help organizations
        re-imagine their workplace for hybrid and in-person work regardless of company size &amp; solve the issues for
        everyone?
      </p>
    ),
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'How did I solve this?',
    body: (
      <p>
        I started this project by asking a simple question: Why is it so difficult for people to connect with one
        another? Through a series of workshops, we identified key user personas, mapped their journeys, uncovered pain
        points, and explored potential solutions. From this process, three key opportunities emerged: Coordinate,
        Modernize, and Optimize.
      </p>
    ),
  },
  {
    kind: 'figure',
    src: img('workshops'),
    alt: 'Photos of the team running workshops with sticky notes on whiteboards, above a detailed user journey map of the Places experience',
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'My design',
    body: (
      <p>
        I started this project by asking a simple question: Why is it so difficult for people to connect with one
        another? Through a series of workshops, we identified key user personas, mapped their journeys, uncovered pain
        points, and explored potential solutions. From this process, three key opportunities emerged: Coordinate,
        Modernize, and Optimize.
      </p>
    ),
  },
  {
    kind: 'figure',
    src: img('key-flows'),
    alt: 'Four key mobile flows: 01 Onboarding (choosing in-person days), 02 Homepage, 03 Work plan, 04 Collaborators',
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'Homepage iteration',
    body: (
      <>
        <p>
          I led the mobile homepage design, partnering closely with the web team to create a consistent cross-platform
          experience. I explored 100+ homepage concepts, testing different information architectures and visual
          directions through user feedback, validation, and direct VP reviews. Ultimately, we adopted the Fluent 2 flat
          design language to create a cohesive One Microsoft experience.
        </p>
        <p>
          To make the experience scalable across organizations of different sizes and needs, I designed a modular
          homepage system with 6 customizable cards: Moments, Location, People, Services, Book a Room/Desk, and Nearby
          Places. This flexible framework allowed each organization to tailor the homepage while maintaining a
          consistent overall experience.
        </p>
      </>
    ),
  },
  {
    kind: 'figure',
    src: img('homepage-iteration'),
    alt: 'Mobile homepage iterations leading to the public preview, and the final homepage broken into six cards: Moments, Location, People, Service, Book room/desk and Nearby places',
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'Delivery lead',
    body: (
      <>
        <p>
          As the Delivery Lead, I drove cross-functional alignment across Design, Engineering, PM, Research, and
          Content. I established and led weekly syncs to surface misalignments, clarify ownership and dependencies, and
          keep both web and mobile teams moving toward the same goals.
        </p>
        <p>
          To streamline design-to-development handoff, I created standardized design and accessibility spec templates,
          reducing ambiguity and helping teams deliver more efficiently. I also established scalable guidelines and
          templates for dark mode and landscape experiences, ensuring designs were implementation-ready across
          different scenarios.
        </p>
        <p>My goal was simple: remove blockers, create alignment, and ensure high-quality designs shipped on time.</p>
      </>
    ),
  },
  {
    kind: 'figure',
    src: img('delivery-spec'),
    alt: 'Mobile and web alignment of the Building 4 page, next to design and accessibility spec templates',
  },
  {
    kind: 'figure',
    src: img('delivery-modes'),
    alt: 'Dark mode and landscape mode guidelines for the mobile Today screen',
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'Design system',
    body: (
      <p>
        As the team scaled across multiple Figma files, design inconsistencies became increasingly difficult to
        manage. I partnered with a web designer to build and document a shared design system for Places. I created and
        standardized 50+ mobile components, establishing reusable patterns that designers could consistently adopt
        across the product. This improved cross-team consistency, file organization, and global updates, while making
        the design process faster and more scalable.
      </p>
    ),
  },
  {
    kind: 'figure',
    src: img('design-system'),
    alt: 'TPX Design UI Kit for mobile and web: color foundations, the mobile component library in Figma, and how Places design files build on Fluent 2',
  },
  {
    kind: 'section',
    eyebrow: 'Outcome',
    title: 'Result & impact',
    body: (
      <>
        <p>
          We successfully delivered Microsoft Places across mobile, web, Teams, and Outlook, bringing a unified
          workplace experience to customers across platforms. By November 2024, Places became widely available to
          eligible Microsoft 365 customers and has since scaled to millions of users worldwide.
        </p>
        <p>
          Within Microsoft, Places rolled out to 228K employees across 600+ buildings, supporting 12K+ bookable rooms
          with AI-powered. Externally, 1,500+ organizations adopted Microsoft Places, demonstrating how the experience
          scaled from a 0→1 product to an enterprise platform.
        </p>
      </>
    ),
  },
  {
    kind: 'figure',
    src: img('platforms'),
    alt: 'Microsoft Places across platforms: the mobile app, the website and Microsoft 365 (Outlook calendar)',
  },
  { kind: 'stats', items: keyStats },
];

const msPlaces: CaseStudyContent = {
  tags: ['0→1 Products', 'Mobile lead + Design system'],
  hero: {
    src: img('hero'),
    alt: 'Outlook calendar with the Microsoft Places card showing who is in the office and suggesting a day to collaborate in person',
  },
  blocks,
};

export default msPlaces;
