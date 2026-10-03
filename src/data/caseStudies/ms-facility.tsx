import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type {
  CaseStudyBlock,
  CaseStudyContent,
  Stat,
} from "@/components/caseStudy/types";
import { Stats } from "@/components/caseStudy/CaseStudyBlocks";
import PageContainer from "@/components/PageContainer";
import { colors } from "@/theme";
import { asset } from "@/utils/asset";
import { keepMuted } from "@/utils/video";

const link = (href: string, children: ReactNode) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: colors.text }}
  >
    {children}
  </Box>
);

// This page's stat labels are Manrope Regular 20 in Figma (the kit renders
// SemiBold); "\n" in a label is a Figma line break.
const statsRow = (items: Stat[]): CaseStudyBlock => ({
  kind: "custom",
  content: (
    <Box
      sx={{
        "& .MuiTypography-root + .MuiTypography-root": {
          fontWeight: 400,
          whiteSpace: "pre-line",
        },
      }}
    >
      <Stats items={items} />
    </Box>
  ),
});

// Figma 2:2137: purple banner (#5a5fce, radius 24, 1280x213) with a real-text
// "Main Title" (Manrope SemiBold 40, line-height 100%, letter-spacing -1%).
const TitleBanner = () => (
  <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 140, md: 213 },
        px: { xs: 3, md: "144px" },
        py: 4,
        borderRadius: "24px",
        bgcolor: "#5a5fce",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: 28, md: 40 },
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.01em",
          textAlign: "center",
        }}
      >
        Think Bigger: MS Ops Ecosystem
      </Typography>
    </Box>
  </PageContainer>
);

// Figma 2:2193: who benefits and how, as label → outcome rows on a #28272a
// card (radius 24). Labels Manrope Bold 24 white, outcomes Light 20 white,
// 100px white 2px arrows between them.
const impactRows: [string, string][] = [
  [
    "Employees",
    "Faster, simpler and AI-powered ticket submission experiences; Personalized, contextual and productive campus experience",
  ],
  ["Facility managers", "All-in-1 AI-powered dashboard"],
  [
    "Facility managers",
    "A scalable foundation for autonous building ecosystem",
  ],
];

const Arrow = () => (
  <Box
    component="svg"
    aria-hidden
    viewBox="0 0 100 14"
    sx={{
      display: { xs: "none", md: "block" },
      width: 100,
      height: 14,
      flexShrink: 0,
      mr: "53px",
      overflow: "visible",
    }}
  >
    <path
      d="M0 7H99M92 1L99 7L92 13"
      fill="none"
      stroke={colors.text}
      strokeWidth={2}
    />
  </Box>
);

const ImpactRows = () => (
  <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: "80px" },
        py: { xs: 4, md: "87px" },
        px: { xs: 3, md: "64px" },
        borderRadius: "24px",
        bgcolor: "#28272a",
      }}
    >
      {impactRows.map(([who, what], i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            gap: { xs: 1, md: 0 },
          }}
        >
          <Typography
            sx={{
              width: { md: 260 },
              flexShrink: 0,
              fontSize: { xs: 20, md: 24 },
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            {who}
          </Typography>
          <Arrow />
          <Typography
            sx={{
              maxWidth: 588,
              fontSize: { xs: 18, md: 20 },
              fontWeight: 300,
              lineHeight: "normal",
              color: colors.text,
            }}
          >
            {what}
          </Typography>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

// Titled dark card with a looping, muted screen recording (WebM first, MP4 fallback for Safari).
// Proportions follow the "Figma Make prototype" picture this replaces.
const VideoPanel = ({
  title,
  name,
  alt,
  background = "#28272a",
  framed = true,
}: {
  title: string;
  name: string;
  alt: string;
  background?: string;
  framed?: boolean;
}) => (
  <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
    <Box
      sx={{
        bgcolor: background,
        borderRadius: "24px",
        px: { xs: 2, md: "45px" },
        pt: { xs: 2.5, md: "40px" },
        pb: { xs: 2.5, md: "42px" },
      }}
    >
      <Typography sx={{ color: "#ffffff", fontSize: { xs: 18, md: 22 }, fontWeight: 500, lineHeight: "normal" }}>
        {title}
      </Typography>
      <Box
        component="video"
        ref={keepMuted}
        autoPlay
        muted
        loop
        playsInline
        poster={asset(`images/ms-facility/${name}-poster.webp`)}
        aria-label={alt}
        sx={{
          display: "block",
          width: "100%",
          height: "auto",
          mt: { xs: 2, md: "60px" },
          borderRadius: framed ? { xs: "10px", md: "20px" } : 0,
        }}
      >
        <source src={asset(`images/ms-facility/${name}.webm`)} type="video/webm" />
        <source src={asset(`images/ms-facility/${name}.mp4`)} type="video/mp4" />
      </Box>
    </Box>
  </PageContainer>
);

const msFacility: CaseStudyContent = {
  tags: ["Design lead", "System + operational thinking"],
  hero: {
    src: "images/ms-facility/hero.webp",
    alt: "Building Orchestrator dashboard on a laptop: East Campus fault overview with KPI cards, an assets-with-faults bar chart and a Copilot insights panel",
  },
  blocks: [
    {
      kind: "section",
      eyebrow: "Introduction",
      title: "What is the Microsoft  Global Facilities Platform?",
      body: (
        <>
          <p>
            The Global Facilities Platform is a centralized platform that plays
            a critical role in supporting workplace and facilities operations at
            Microsoft. It serves as the primary entry point for employees and
            facility teams to request, manage and fulfill a wide range of
            services across Microsoft’s global campuses.
          </p>
          <p>
            It’s a 15-year-old website, the platform has supported over{" "}
            <strong>1.7 million facility-related requests worldwide</strong> and
            supports operations <strong>across 100+ countries,</strong> making
            it one of the most heavily used operational systems within
            organization.
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/old-portal.webp",
      alt: "The legacy RE&F Global Facilities Service Center request page: a long \"How can we help you?\" form asking for building, room number, room type, problem class and problem type",
    },
    {
      kind: "section",
      eyebrow: "Problem discovery",
      title: (
        <>
          Turning Pain Points into <br />
          AI Opportunities
        </>
      ),
      body: (
        <>
          <p>
            The data revealed recurring issues that caused delays, confusion,
            and rework, directly increasing operational costs. Facilities teams
            spent thousands of hours manually reviewing and correcting
            misclassified requests.
          </p>
          <p>
            This uncovered a clear opportunity: modernize the 15-year-old
            Facilities Portal with AI, making it easier for employees to submit
            accurate requests while reducing manual work for facilities teams.
            My AI vision ideas also fasten the process, AI helps analyze
            description ad images.
          </p>
        </>
      ),
    },
    statsRow([
      { value: "~275K", label: "Work orders per year" },
      { value: "50%", label: "of facility request filled by facility staff" },
      {
        value: "25%",
        label: "of requests misclassified and need manual correction",
      },
      { value: "10%", label: "of requests are inactionable" },
    ]),
    {
      kind: "section",
      eyebrow: "Solution",
      title: (
        <>
          I led 2 designers and <br />
          came up with 2 solutions
        </>
      ),
      body: (
        <>
          <p>
            I led 2 designers from problem analysis and pain-point
            identification through AI ideation and validation. Building on
            insights from my earlier vision work, we explored image-based ticket
            creation and AI-powered category pre-filling to simplify the
            facilities request experience.
          </p>
          <p>
            We developed 2 design directions and validated them through
            usability testing and SUS surveys. Users strongly preferred Option
            2, which reduced the experience from 5 steps to 2, significantly
            simplifying the end-to-end process.
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/sus-validation.webp",
      alt: "SUS survey validation comparing three designs: the current MS Facilities site (average SUS 55), Option 1 Stepper (SUS 80) and the preferred Option 2 All-in-One (SUS 85)",
    },
    {
      kind: "section",
      eyebrow: "Solution",
      title: "Design prototype",
      body: (
        <>
          <p>
            I led 2 designers from problem analysis and pain-point
            identification through AI ideation and validation. Building on
            insights from my earlier vision work, we explored image-based ticket
            creation and AI-powered category pre-filling to simplify the
            facilities request experience.
          </p>
          <p>
            We developed 2 design directions and validated them through
            usability testing and SUS surveys. Users strongly preferred Option
            2, which reduced the experience from 5 steps to 2, significantly
            simplifying the end-to-end process.
          </p>
        </>
      ),
    },
    {
      kind: "custom",
      content: (
        <VideoPanel
          title="MS facility portal 2.0 demo"
          name="portal-2-demo"
          alt="Demo of the MS facility portal 2.0 on a laptop: picking a building and room to make a facility request"
          background="#000000"
          framed={false}
        />
      ),
    },
    {
      kind: "section",
      eyebrow: "Outcome",
      title: "Result & impact",
      body: (
        <>
          <p>
            We transformed a 15-year-old, taxonomy-heavy Facilities Portal into
            an AI-first experience with natural-language input and AI-assisted
            classification. The redesign reduced requests from 5 steps to 2,
            lowered misclassification and manual rework, and is projected to
            save 16,400+ hours annually.
          </p>
          <p>
            Today, the experience supports facilities operations across 100+
            countries and 540+ buildings.
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/validate-after-launch.webp",
      alt: "Validation after launch on 4/11/2026: the old portal scored SUS 55, while MS Facility Portal 2.0 scored SUS 92",
    },
    statsRow([
      { value: "SUS 55 → 92", label: "Ai powered and improved experiences" },
      { value: "50%", label: "fewer clicks, shorten steps from 5 to 2" },
      {
        value: "25%",
        label: "fewer submission\nerrors & misclassifications",
      },
      { value: "16,400+", label: "estimated hours saved annually" },
    ]),
    { kind: "custom", content: <TitleBanner /> },
    {
      kind: "section",
      eyebrow: "Introduction",
      title: (
        <>
          Why expand to <br />
          MS Ops ecosystem?
        </>
      ),
      body: (
        <>
          <p>
            While redesigning the facilities request flow, I discovered a much
            larger challenge behind the scenes:{" "}
            <strong>
              facility managers relied on 90+ disconnected dashboards to manage
              work orders, alarms, faults, air quality, and building health.
            </strong>
          </p>
          <p>
            At Microsoft’s scale—600+ buildings, 30K+ assets, and 2M+ data
            points—this fragmentation created significant operational
            complexity.
          </p>
          <p>
            My AI vision explored both employee-facing and back-end operations.
            After gaining leadership support, the vision expanded into an
            AI-powered building operations platform, bringing fragmented
            workflows and data into one experience.
          </p>
        </>
      ),
    },
    statsRow([
      { value: "~2M", label: "Data points" },
      { value: "600+", label: "MS buildings" },
      { value: "30K", label: "Devices & equipment" },
      { value: "90+", label: "Disconnected dashboard" },
    ]),
    {
      kind: "figure",
      src: "images/ms-facility/fragmented-tools.webp",
      alt: "Today's fragmented tooling: a spreadsheet listing dozens of Power BI dashboards, a grid of separate dashboard screens, and a work-order journey map from request through completion",
    },
    {
      kind: "section",
      eyebrow: "Solution",
      title: "Learning a Complex Domain Through Users",
      body: (
        <>
          <p>
            I co-led this project with another designer, starting with user
            interviews and journey mapping to understand the complex facilities
            operations space. As a new domain for me, talking directly with
            facility managers helped us quickly uncover their real needs.
          </p>
          <p>
            The key insight was clear: users didn’t need another dashboard—
            <strong>
              they needed one unified experience that brought fragmented tools
              together, with AI helping them identify issues and take action
              faster.
            </strong>
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/user-research.webp",
      alt: "We talked to 16 facility managers: workshop whiteboards above a journey map of phases (alarm received, self resolution, issue investigation, vendor support, fix and validate) with goals, data points, touchpoints and emotions",
    },
    {
      kind: "section",
      eyebrow: "Solution",
      title: "From Fragmented Tools to One Intelligent Platform",
      body: (
        <>
          <p>
            Facility managers relied on a fragmented mix of Power BI dashboards,
            Excel, D365, and legacy tools. A single work order could require
            switching between multiple systems to manage requests, furniture,
            technicians, and assets—creating a slow and disconnected workflow.
          </p>
          <p>
            Our vision was to bring these experiences into one unified,
            AI-powered platform, personalized by role and location, so facility
            teams could access the right information, make decisions, and take
            action—all in one place.
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/design-exploration.webp",
      alt: "My design exploration: a grid of eight early dashboard concepts with charts, tables and KPI cards",
    },
    {
      kind: "custom",
      content: (
        <VideoPanel
          title="Figma Make prototype"
          name="figma-make-prototype"
          alt="Figma Make prototype of the Building Orchestrator facilities management dashboard: fault KPIs, an assets-with-a-fault chart and the faults table"
        />
      ),
    },
    {
      kind: "section",
      eyebrow: "Outcome",
      title: "Result & impact",
      body: (
        <>
          <p>
            Facility managers relied on a fragmented mix of Power BI dashboards,
            Excel, D365, and legacy tools. A single work order could require
            switching between multiple systems to manage requests, furniture,
            technicians, and assets—creating a slow and disconnected workflow.
          </p>
          <p>
            Our vision was to bring these experiences into one unified,
            AI-powered platform, personalized by role and location, so facility
            teams could access the right information, make decisions, and take
            action—all in one place.
          </p>
          <p>
            We also won the{" "}
            {link(
              "https://realcomm.com/news/1224/1/realcomm-ibcon-2026-digie-award-winners-announced",
              "Realcomm IBcon 2026 Digie Award",
            )}
            <Box component="span" sx={{ color: colors.text }}>
              !
            </Box>
          </p>
        </>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/unified-platform.webp",
      alt: "90+ disconnected dashboards become one unified, role- and location-based platform: the Building Orchestrator dashboard surrounded by bubbles for alarms, assets, faults, air quality, energy, water, devices and more",
    },
    { kind: "custom", content: <ImpactRows /> },
  ],
};

export default msFacility;
