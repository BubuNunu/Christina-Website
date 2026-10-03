import { Box, Typography } from '@mui/material';
import PageContainer from '@/components/PageContainer';
import { FigureImage, Section } from '@/components/caseStudy/CaseStudyBlocks';
import { asset } from '@/utils/asset';
import type { CaseStudyBlock, CaseStudyContent, Stat } from '@/components/caseStudy/types';

// Text, paragraph breaks and bold/link spans match the Figma frame 2:1575 text layers.

const keyStats: Stat[] = [
  { value: '228K+', label: 'Microsoft employees' },
  { value: '5.7M', label: 'Monthly active users' },
  { value: '1,500+', label: 'Enterprises using' },
  { value: '30%', label: 'Engagement & retention' },
];

// Chart row under "What are the problems?" (Figma 2:1614): three donut charts and one plain
// figure, drawn here because they are not part of any exported picture.
const problemStats = [
  {
    value: '84%',
    percent: 84,
    text: 'of employees would motivated by the promise of social connection with coworkers.',
  },
  {
    value: '25%',
    percent: 25,
    text: 'of the workforce feel isolated and unable to nurture close relationships with colleagues',
  },
  {
    value: '23%',
    percent: 23,
    text: (
      <>
        average utilization rate
        <br />
        utilization remains lower than pre-pandemic levels.
      </>
    ),
  },
  {
    value: '2nd largest',
    text: (
      <>
        operating expense in a company’s budget is
        <br />
        real estate &amp; facilities
      </>
    ),
  },
];

// Donut from Figma: 144px ring, 10.8px stroke, grey track at 50% opacity, purple arc with round
// caps starting at 12 o'clock.
const Donut = ({ percent }: { percent: number }) => {
  const r = 71.95;
  const c = 2 * Math.PI * r;
  return (
    <Box component="svg" viewBox="0 0 156 156" aria-hidden sx={{ position: 'absolute', inset: 0, width: 1, height: 1 }}>
      <circle cx="78" cy="78" r={r} fill="none" stroke="#9a9a9a" strokeOpacity={0.5} strokeWidth={10.79} />
      <circle
        cx="78"
        cy="78"
        r={r}
        fill="none"
        stroke="#aca0f5"
        strokeWidth={10.79}
        strokeLinecap="round"
        strokeDasharray={`${(c * percent) / 100} ${c}`}
        transform="rotate(-90 78 78)"
      />
    </Box>
  );
};

const statValueSx = {
  fontSize: 40,
  fontWeight: 600,
  lineHeight: '56px',
  textAlign: 'center',
} as const;

const ProblemCharts = () => (
  <PageContainer sx={{ mt: { xs: -3, md: '-16px' }, pb: { xs: 7, md: '120px' } }}>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 242px)',
          lg: 'repeat(4, 242px)',
        },
        justifyContent: 'space-between',
        rowGap: 6,
        columnGap: 4,
      }}
    >
      {problemStats.map((item) => (
        <Box
          key={item.value}
          sx={{
            width: 242,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {item.percent !== undefined ? (
            <Box
              sx={{
                position: 'relative',
                width: 156,
                height: 156,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Donut percent={item.percent} />
              <Typography sx={[statValueSx, { position: 'relative' }]}>{item.value}</Typography>
            </Box>
          ) : (
            <Typography sx={[statValueSx, { color: '#aca0f5', mt: '47px', mb: '55px' }]}>{item.value}</Typography>
          )}
          <Typography
            sx={{
              mt: '20px',
              fontSize: 16,
              lineHeight: '22px',
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

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
          <strong>Mobile Design Lead</strong>, helping scale the team to 5 designers across 9 teams and leading the
          mobile experience from early exploration through launch and enterprise adoption 0 &gt; 1. I also worked on 10+
          coordinate features &amp; design systems, make sure mobile &amp; web alignment.
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
            <Box component="span" sx={{ fontWeight: 400 }}>
              ,
            </Box>
          </a>{' '}
          and <u style={{ fontWeight: 700 }}>PCWorld</u>.
        </p>
      </>
    ),
  },
  { kind: 'stats', items: keyStats },
  {
    kind: 'custom',
    content: (
      <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ position: 'relative' }}>
          <FigureImage
            src={img('intro-mockups')}
            alt="Microsoft Places on a phone and on the web, showing the Today view for Building 4 with who is working there and upcoming meetings"
          />
          {/* Screen recording of the mobile Today page, laid over the phone's screen in the mockup.
              Position and size are the phone screen's pixel box in the 2560x1484 picture. */}
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Screen recording of scrolling the MS Places mobile Today page"
            sx={{
              position: 'absolute',
              left: `${(282 / 2560) * 100}%`,
              top: `${(546 / 1484) * 100}%`,
              width: `${(442 / 2560) * 100}%`,
              height: `${(891 / 1484) * 100}%`,
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '11% 11% 0 0 / 5.3% 5.3% 0 0',
              display: 'block',
            }}
          >
            <source src={asset('images/ms-places/homepage-phone.webm')} type="video/webm" />
            <source src={asset('images/ms-places/homepage-phone.mp4')} type="video/mp4" />
          </Box>
        </Box>
      </PageContainer>
    ),
  },
  {
    kind: 'custom',
    content: (
      <>
        <Section
          eyebrow="Introduction"
          title="What are the problems?"
          body={
            <>
              <p>
                The pandemic made the transition to office life challenging, as people found it hard to re-establish
                in-person connections and rebuild a sense of community at work. Microsoft Places aimed to bring people,
                schedules, work places, and spaces into one AI- powered experiences across Teams and Outlook.
              </p>
              <p>
                How might we help organizations <strong>re-imagine their workplace</strong> for hybrid and in-person
                work regardless of company size &amp; solve the issues for everyone?
              </p>
            </>
          }
        />
        <ProblemCharts />
      </>
    ),
  },
  {
    kind: 'section',
    eyebrow: 'Solution',
    title: 'How did I solve this?',
    body: (
      <p>
        I started this project by asking a simple question: Why is it so difficult for people to connect with one
        another?
        <br />
        Through a series of workshops, we identified key user personas, mapped their journeys, uncovered pain points,
        and explored potential solutions. From this process, three key opportunities emerged:{' '}
        <Box component="span" sx={{ color: '#ffffff' }}>
          Coordinate, Modernize, and Optimize.
        </Box>
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
      <>
        <p>
          I started this project by asking a simple question: Why is it so difficult for people to connect with one
          another?
        </p>
        <p>
          Through a series of workshops, we identified key user personas, mapped their journeys, uncovered pain points,
          and explored potential solutions. From this process, three key opportunities emerged:{' '}
          <strong>Coordinate, Modernize, and Optimize.</strong>
        </p>
      </>
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
          experience. I explored <strong>100+ homepage concepts</strong>, testing different information architectures
          and visual directions through user feedback, validation, and direct VP reviews. Ultimately, we adopted the
          Fluent 2 flat design language to create a cohesive One Microsoft experience.
        </p>
        <p>
          To make the experience scalable across organizations of different sizes and needs, I designed a modular
          homepage system with <strong>6 customizable cards</strong>: Moments, Location, People, Services, Book a
          Room/Desk, and Nearby Places.
        </p>
        <p>
          This flexible framework allowed each organization to tailor the homepage while maintaining a consistent
          overall experience.
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
          As the <strong>Delivery Lead</strong>
          <Box component="span" sx={{ color: '#ffffff' }}>
            ,
          </Box>{' '}
          I drove cross-functional alignment across Design, Engineering, PM, Research, and Content. I established and
          led weekly syncs to surface misalignments, clarify ownership and dependencies, and keep both web and mobile
          teams moving toward the same goals.
        </p>
        <p>
          To streamline design-to-development handoff, I created standardized design and accessibility spec templates,
          reducing ambiguity and helping teams deliver more efficiently. I also established scalable guidelines and
          templates for dark mode and landscape experiences, ensuring designs were implementation-ready across different
          scenarios.
        </p>
        <p>
          My goal was simple:{' '}
          <strong>remove blockers, create alignment, and ensure high-quality designs shipped on time.</strong>
        </p>
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
      <>
        <p>
          As the team scaled across multiple Figma files, design inconsistencies became increasingly difficult to
          manage. I partnered with a web designer to build and document a shared design system for Places.
        </p>
        <p>
          I created and standardized 50+ mobile components, establishing reusable patterns that designers could
          consistently adopt across the product. This improved cross-team consistency, file organization, and global
          updates, while making the design process faster and more scalable.
        </p>
      </>
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
          with <strong>AI-powered</strong>
          <Box component="span" sx={{ color: '#ffffff' }}>
            .
          </Box>{' '}
          Externally, 1,500+ organizations adopted Microsoft Places, demonstrating how the experience scaled from a 0→1
          product to an enterprise platform.
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
