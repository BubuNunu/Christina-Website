export interface Project {
  slug: string;
  title: string;
  summary: string;
  // Optional short copy for the homepage card.
  cardSummary?: string;
  // Card picture on Home, under public/
  image: string;
  // Optional silent looping clip shown immediately on the homepage card.
  // Path under public/ without extension; a .webm and an .mp4 must both exist.
  cardVideo?: string;
  // Optional silent looping cover shared by Home and the case-study hero.
  // Path under public/ without extension; .webm and .mp4 variants must exist.
  coverVideo?: string;
  // Optional looping clip that plays over the picture on hover: path under public/
  // without extension; a .webm and an .mp4 must both exist
  hoverVideo?: string;
}

// Case studies from the Figma "website 页面" page, in the order shown on Home.
export const projects: Project[] = [
  {
    slug: 'ms-places',
    title: 'MS Places',
    summary:
      'Led 0→1 mobile design across 5 designers and 9 partner teams, scaling Microsoft Places to 5.7M MAU and 1,500+ enterprise customers within 3 months of launch.',
    cardSummary:
      'Led 0→1 mobile design across 5 designers and 9 partner teams, scaling Places to 5.7M MAU and 1,500+ enterprise customers.',
    image: 'images/home/ms-places-recommended-day.png',
    cardVideo: 'images/home/ms-places-hover',
  },
  {
    slug: 'm365-ess-agent',
    title: 'M365 ESS Agent',
    summary:
      'Led the end-to-end design of an Employee Self-Service agent in Microsoft 365 Copilot, turning AI vision into scalable workplace experiences for enterprise employees.',
    cardSummary:
      'Led end-to-end design of an AI employee self-service agent, turning early vision into scalable workplace experiences in Microsoft 365 Copilot.',
    image: 'images/m365-ess-agent/m365-ess-cover-poster.webp',
    coverVideo: 'images/m365-ess-agent/m365-ess-cover',
  },
  {
    slug: 'ms-facility',
    title: 'Facilities & Operations',
    summary:
      'Started with 3 AI vision videos that shaped the roadmap for Microsoft’s 15-year-old Facilities platform, ultimately scaling into an AI-powered operations ecosystem unifying 90+ dashboards.',
    cardSummary:
      'Turned AI vision into a global operations ecosystem, modernizing Microsoft’s facilities platform and unifying 90+ fragmented dashboards.',
    image: 'images/home/ms-facility.webp',
  },
  {
    slug: 'azure-devops-agents',
    title: 'Azure DevOps Agents',
    summary:
      'Simplified complex developer workflows with AI-powered Work Item Assistant agent and DevOps Assistant Agent, driving 163K+ AI-generated work items and saving 7.5K+ hours every month.',
    cardSummary:
      'Designed AI-powered developer agents that generated 163K+ work items and saved 7.5K+ hours every month.',
    image: 'images/home/azure-devops-agents.webp',
  },
  {
    slug: 'wm-design-system',
    title: 'WM.com Design System',
    summary:
      'Led end-to-end product design across WM.com and My WM for 21M+ users, while establishing WM’s first enterprise design system to unify experiences and scale design across products.',
    cardSummary:
      'Led product design across WM.com and My WM for 21M+ users while establishing the company’s first enterprise design system.',
    image: 'images/home/wm-design-system.webp',
  },
  {
    slug: 'optima-ninja',
    title: 'Optima Ninja',
    summary:
      'Served as the founding solo designer shaping the company brand and digital experience from 0→1, driving 1K+ daily clicks, 120% more qualified leads, and a Top 5 Chinese SEO ranking.',
    cardSummary:
      'Built the brand and product experience from 0→1 as founding designer, driving 1K+ daily clicks and 120% more qualified leads.',
    image: 'images/home/optima-ninja.webp',
  },
];

export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);

