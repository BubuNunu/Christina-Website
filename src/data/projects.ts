export interface Project {
  slug: string;
  title: string;
  summary: string;
}

// Case studies from the Figma "website 页面" page, in the order shown on Home.
export const projects: Project[] = [
  {
    slug: 'ms-places',
    title: 'MS Places (0→1)',
    summary: 'Led 0→1 mobile design for Microsoft Places.',
  },
  {
    slug: 'm365-ess-agent',
    title: 'AI Vision → M365 ESS Agent',
    summary: 'End-to-end design of an Employee Self-Service agent in Microsoft 365 Copilot.',
  },
  {
    slug: 'ms-facility',
    title: 'MS Facility → Operation Ecosystem',
    summary: 'From 3 AI vision videos to an AI-powered operations ecosystem.',
  },
  {
    slug: 'azure-devops-agents',
    title: 'Azure DevOps Agents',
    summary: 'AI-powered Work Item Assistant and DevOps Assistant agents.',
  },
  {
    slug: 'wm-design-system',
    title: 'WM.com + First Design System',
    summary: "WM.com, My WM, and WM's first enterprise design system.",
  },
  {
    slug: 'optima-ninja',
    title: 'Optima Ninja (0→1)',
    summary: 'Founding solo designer shaping the brand and digital experience.',
  },
];

export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
