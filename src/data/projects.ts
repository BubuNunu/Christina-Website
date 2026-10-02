export interface Project {
  slug: string;
  title: string;
  summary: string;
  // Card picture on Home, under public/
  image: string;
}

// Case studies from the Figma "website 页面" page, in the order shown on Home.
export const projects: Project[] = [
  {
    slug: 'ms-places',
    title: 'MS Places (0→1)',
    summary:
      'Led 0→1 mobile design across 5 designers and 9 partner teams, scaling Microsoft Places to 5.7M MAU and 1,500+ enterprise customers within 3 months of launch.',
    image: 'images/home/ms-places.webp',
  },
  {
    slug: 'm365-ess-agent',
    title: 'AI Vision → M365 ESS Agent',
    summary:
      'Led the end-to-end design of an Employee Self-Service agent in Microsoft 365 Copilot, turning AI vision into scalable workplace experiences for enterprise employees.',
    image: 'images/home/m365-ess-agent.webp',
  },
  {
    slug: 'ms-facility',
    title: 'MS Facility → Operation Ecosystem',
    summary:
      'Started with 3 AI vision videos that shaped the roadmap for Microsoft’s 15-year-old Facilities platform, ultimately scaling into an AI-powered operations ecosystem unifying 90+ dashboards.',
    image: 'images/home/ms-facility.webp',
  },
  {
    slug: 'azure-devops-agents',
    title: 'Azure DevOps Agents',
    summary:
      'Simplified complex developer workflows with AI-powered Work Item Assistant agent and DevOps Assistant Agent, driving 163K+ AI-generated work items and saving 7.5K+ hours every month.',
    image: 'images/home/azure-devops-agents.webp',
  },
  {
    slug: 'wm-design-system',
    title: 'WM.com + First Design System',
    summary:
      'Led end-to-end product design across WM.com and My WM for 21M+ users, while establishing WM’s first enterprise design system to unify experiences and scale design across products.',
    image: 'images/home/wm-design-system.webp',
  },
  {
    slug: 'optima-ninja',
    title: 'Optima Ninja (0→1)',
    summary:
      'Served as the founding solo designer shaping the company brand and digital experience from 0→1, driving 1K+ daily clicks, 120% more qualified leads, and a Top 5 Chinese SEO ranking.',
    image: 'images/home/optima-ninja.webp',
  },
];

export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
