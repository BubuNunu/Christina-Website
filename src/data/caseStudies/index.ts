import type { CaseStudyContent } from '@/components/caseStudy/types';
import msPlaces from './ms-places';
import m365EssAgent from './m365-ess-agent';
import msFacility from './ms-facility';
import azureDevopsAgents from './azure-devops-agents';
import wmDesignSystem from './wm-design-system';
import optimaNinja from './optima-ninja';

// Case study page content, keyed by the project slug in src/data/projects.ts.
export const caseStudies: Record<string, CaseStudyContent> = {
  'ms-places': msPlaces,
  'm365-ess-agent': m365EssAgent,
  'ms-facility': msFacility,
  'azure-devops-agents': azureDevopsAgents,
  'wm-design-system': wmDesignSystem,
  'optima-ninja': optimaNinja,
};
