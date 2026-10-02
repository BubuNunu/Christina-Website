import { Box, Typography } from "@mui/material";
import type { CaseStudyContent } from "@/components/caseStudy/types";
import PageContainer from "@/components/PageContainer";
import { colors } from "@/theme";

// Figma 2:2193: who benefits and how, as label → outcome rows.
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

const ImpactRows = () => (
  <PageContainer>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: "80px" },
        py: { xs: 2, md: "87px" },
        px: { md: "64px" },
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
              fontSize: 20,
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {who}
          </Typography>
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "block" },
              width: 100,
              height: "1px",
              bgcolor: colors.body,
              mr: "53px",
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              maxWidth: 588,
              fontSize: 16,
              lineHeight: "normal",
              color: colors.body,
            }}
          >
            {what}
          </Typography>
        </Box>
      ))}
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
      title: "What is the Microsoft Global Facilities Platform?",
      body: (
        <p>
          The Global Facilities Platform is a centralized platform that plays a
          critical role in supporting workplace and facilities operations at
          Microsoft. It serves as the primary entry point for employees and
          facility teams to request, manage and fulfill a wide range of services
          across Microsoft’s global campuses. It’s a 15-year-old website, the
          platform has supported over 1.7 million facility-related requests
          worldwide and supports operations across 100+ countries, making it one
          of the most heavily used operational systems within organization.
        </p>
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
      title: "Turning Pain Points into AI Opportunities",
      body: (
        <p>
          The data revealed recurring issues that caused delays, confusion, and
          rework, directly increasing operational costs. Facilities teams spent
          thousands of hours manually reviewing and correcting misclassified
          requests. This uncovered a clear opportunity: modernize the
          15-year-old Facilities Portal with AI, making it easier for employees
          to submit accurate requests while reducing manual work for facilities
          teams. My AI vision ideas also fasten the process, AI helps analyze
          description ad images.
        </p>
      ),
    },
    {
      kind: "stats",
      items: [
        { value: "~275K", label: "Work orders per year" },
        { value: "50%", label: "of facility request filled by facility staff" },
        {
          value: "25%",
          label: "of requests misclassified and need manual correction",
        },
        { value: "10%", label: "of requests are inactionable" },
      ],
    },
    {
      kind: "section",
      eyebrow: "Solution",
      title: "I led 2 designers and came up with 2 solutions",
      body: (
        <p>
          I led 2 designers from problem analysis and pain-point identification
          through AI ideation and validation. Building on insights from my
          earlier vision work, we explored image-based ticket creation and
          AI-powered category pre-filling to simplify the facilities request
          experience. We developed 2 design directions and validated them
          through usability testing and SUS surveys. Users strongly preferred
          Option 2, which reduced the experience from 5 steps to 2,
          significantly simplifying the end-to-end process.
        </p>
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
        <p>
          I led 2 designers from problem analysis and pain-point identification
          through AI ideation and validation. Building on insights from my
          earlier vision work, we explored image-based ticket creation and
          AI-powered category pre-filling to simplify the facilities request
          experience. We developed 2 design directions and validated them
          through usability testing and SUS surveys. Users strongly preferred
          Option 2, which reduced the experience from 5 steps to 2,
          significantly simplifying the end-to-end process.
        </p>
      ),
    },
    // TODO(figma 2:2123, 1280x849): "MS facility portal 2.0 demo" prototype — no matching picture/video in the Drive folder yet.
    {
      kind: "section",
      eyebrow: "Outcome",
      title: "Result & impact",
      body: (
        <p>
          We transformed a 15-year-old, taxonomy-heavy Facilities Portal into an
          AI-first experience with natural-language input and AI-assisted
          classification. The redesign reduced requests from 5 steps to 2,
          lowered misclassification and manual rework, and is projected to save
          16,400+ hours annually. Today, the experience supports facilities
          operations across 100+ countries and 540+ buildings.
        </p>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/validate-after-launch.webp",
      alt: "Validation after launch on 4/11/2026: the old portal scored SUS 55, while MS Facility Portal 2.0 scored SUS 92",
    },
    {
      kind: "stats",
      items: [
        { value: "SUS 55 → 92", label: "Ai powered and improved experiences" },
        { value: "50%", label: "fewer clicks, shorten steps from 5 to 2" },
        { value: "25%", label: "fewer submission errors & misclassifications" },
        { value: "16,400+", label: "estimated hours saved annually" },
      ],
    },
    // TODO(figma 2:2137, 1280x213): title banner between the Portal 2.0 story and the MS Ops ecosystem story — not in the Drive folder.
    {
      kind: "section",
      eyebrow: "Introduction",
      title: "Why expand to MS Ops ecosystem?",
      body: (
        <p>
          While redesigning the facilities request flow, I discovered a much
          larger challenge behind the scenes: facility managers relied on 90+
          disconnected dashboards to manage work orders, alarms, faults, air
          quality, and building health. At Microsoft’s scale—600+ buildings,
          30K+ assets, and 2M+ data points—this fragmentation created
          significant operational complexity. My AI vision explored both
          employee-facing and back-end operations. After gaining leadership
          support, the vision expanded into an AI-powered building operations
          platform, bringing fragmented workflows and data into one experience.
        </p>
      ),
    },
    {
      kind: "stats",
      items: [
        { value: "~2M", label: "Data points" },
        { value: "600+", label: "MS buildings" },
        { value: "30K", label: "Devices & equipment" },
        { value: "90+", label: "Disconnected dashboard" },
      ],
    },
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
        <p>
          I co-led this project with another designer, starting with user
          interviews and journey mapping to understand the complex facilities
          operations space. As a new domain for me, talking directly with
          facility managers helped us quickly uncover their real needs. The key
          insight was clear: users didn’t need another dashboard—they needed one
          unified experience that brought fragmented tools together, with AI
          helping them identify issues and take action faster.
        </p>
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
        <p>
          Facility managers relied on a fragmented mix of Power BI dashboards,
          Excel, D365, and legacy tools. A single work order could require
          switching between multiple systems to manage requests, furniture,
          technicians, and assets—creating a slow and disconnected workflow. Our
          vision was to bring these experiences into one unified, AI-powered
          platform, personalized by role and location, so facility teams could
          access the right information, make decisions, and take action—all in
          one place.
        </p>
      ),
    },
    {
      kind: "figure",
      src: "images/ms-facility/design-exploration.webp",
      alt: "My design exploration: a grid of eight early dashboard concepts with charts, tables and KPI cards",
    },
    {
      kind: "figure",
      src: "images/ms-facility/figma-make-prototype.webp",
      alt: "Figma Make prototype of the Building Orchestrator facilities management dashboard with fault KPIs and an assets-with-a-fault bar chart",
    },
    {
      kind: "section",
      eyebrow: "Outcome",
      title: "Result & impact",
      body: (
        <p>
          Facility managers relied on a fragmented mix of Power BI dashboards,
          Excel, D365, and legacy tools. A single work order could require
          switching between multiple systems to manage requests, furniture,
          technicians, and assets—creating a slow and disconnected workflow. Our
          vision was to bring these experiences into one unified, AI-powered
          platform, personalized by role and location, so facility teams could
          access the right information, make decisions, and take action—all in
          one place. We also won the Realcomm IBcon 2026 Digie Award!
        </p>
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
