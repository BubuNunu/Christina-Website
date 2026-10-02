import type { CaseStudyContent } from '@/components/caseStudy/types';

// Content from Figma frame 2:2203 ("Azure DevOps Agents").
// NOTE: the Figma MCP quota ran out before any screenshot could be taken, so the
// text below comes from the cached layer metadata (paragraph breaks and bold spans
// could not be verified) and the picture frames are not yet included. Missing
// figures, in visual order (insert as 'figure' blocks at the marked spots):
//   2:2216 hero (Frame 2028433987, 1441x725) - currently using the Home card image
//   2:2271 "6 entry points" (1280x638)
//   2:2281 "Auditing 6 entry points" + "Grouping" (1282x1316; children 2:2282, 2:2286)
//   2:2289 "My first proposal" + "Due to tech limitation, entry points from 6 to 3" (1282x1053; children 2:2290, 2:2296)
//   2:2313 Old child item generator / A/B test options / results (1282x1594; children 2:2314, 2:2332, 2:2338)
//   2:2344 "Old DevOps Assitant" (1282x552)
//   2:2348 "New DevOps Assitant" (1282x552)
//   2:2370 "Entry points from 6 to 3" (1282x461)

const azureDevopsAgents: CaseStudyContent = {
  tags: ['developer tool', 'AI agents'],
  hero: { src: 'images/home/azure-devops-agents.webp', alt: 'Azure DevOps Copilot agents shown in the Azure DevOps web app' },
  blocks: [
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'What is Azure DevOps?',
      body: (
        <>
          <p>
            Azure DevOps (ADO) is Microsoft’s end-to-end developer platform for planning, building, and shipping
            software, helping developers and engineering teams manage work throughout the product development life
            cycle.
          </p>
          <p>
            I led 2 designers to bring UX into Azure DevOps Copilot for the first time, simplifying 6 entry points to 3
            and scaling the experience to 11K users, 163.5K+ work items/month, and ~47K hours saved.
          </p>
        </>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Problem discovery',
      title: 'What are the pain points?',
      body: (
        <>
          <p>
            Azure DevOps Copilot have 6 different entry points, making it difficult for users to discover the right
            agent and understand where to start. User feedback also revealed opportunities to make the overall
            experience more intuitive and consistent.
          </p>
          <p>
            How might we simplify 6 fragmented entry points and create a more intuitive, scalable Copilot experience
            for both internal and external Azure DevOps users?
          </p>
        </>
      ),
    },
    // TODO figure 2:2271 "6 entry points"
    {
      kind: 'section',
      eyebrow: 'My approach',
      title: 'Auditing & Simplifying the Experience',
      body: (
        <p>
          I started by auditing all 6 entry points—their functionality, interaction patterns, and limitations. I then
          mapped and grouped them by interaction type and context, from platform and board level to individual work
          items. This revealed two core patterns: Chat-based Agents for conversational assistance and Action-based
          Agents for completing specific tasks.
        </p>
      ),
    },
    // TODO figure 2:2281 "Auditing 6 entry points" + "Grouping"
    {
      kind: 'section',
      eyebrow: 'Solution',
      title: 'Designing Within Technical Constraints',
      body: (
        <>
          <p>
            My initial proposal was to simplify 6 entry points into 2—one within existing GitHub Copilot and one at the
            Azure DevOps work-item level. However, technical and platform ownership constraints prevented us from
            integrating the agents directly into those surfaces.
          </p>
          <p>
            After working with Engineering to understand these limitations, I adapted the strategy from 6 → 3 entry
            points, consolidating overlapping experiences while working within the existing platform architecture.
          </p>
        </>
      ),
    },
    // TODO figure 2:2289 "My first proposal" + "Due to tech limitation, entry points from 6 to 3"
    {
      kind: 'section',
      eyebrow: 'Validation',
      title: 'Improving the Core Agent Experience',
      body: (
        <>
          <p>
            Beyond consolidating the entry points, I redesigned key workflows across the Child Item Generator, Work Item
            Generator, and DevOps Assistant.
          </p>
          <p>
            For the Child Item Generator, users struggled to preview, review, and save multiple AI-generated items. The
            existing information architecture made generated content difficult to scan and understand. I redesigned the
            experience to create a clearer hierarchy, easier multi-item review, and more intuitive save flow, helping
            users confidently review AI-generated content before taking action.
          </p>
        </>
      ),
    },
    // TODO figure 2:2313 old child item generator, A/B test options, results
    {
      kind: 'section',
      eyebrow: 'Chat-based agent',
      title: 'DevOps Assistant',
      // Figma repeats the Validation section's body text here verbatim.
      body: (
        <>
          <p>
            Beyond consolidating the entry points, I redesigned key workflows across the Child Item Generator, Work Item
            Generator, and DevOps Assistant.
          </p>
          <p>
            For the Child Item Generator, users struggled to preview, review, and save multiple AI-generated items. The
            existing information architecture made generated content difficult to scan and understand. I redesigned the
            experience to create a clearer hierarchy, easier multi-item review, and more intuitive save flow, helping
            users confidently review AI-generated content before taking action.
          </p>
        </>
      ),
    },
    // TODO figure 2:2344 "Old DevOps Assitant"
    // TODO figure 2:2348 "New DevOps Assitant"
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: 'Result & impact',
      // Figma has the MS Facility outcome text here verbatim.
      body: (
        <>
          <p>
            Facility managers relied on a fragmented mix of Power BI dashboards, Excel, D365, and legacy tools. A single
            work order could require switching between multiple systems to manage requests, furniture, technicians, and
            assets—creating a slow and disconnected workflow.
          </p>
          <p>
            Our vision was to bring these experiences into one unified, AI-powered platform, personalized by role and
            location, so facility teams could access the right information, make decisions, and take action—all in one
            place.
          </p>
          <p>We also won the Realcomm IBcon 2026 Digie Award!</p>
        </>
      ),
    },
    {
      kind: 'stats',
      items: [
        { value: '1.1K+', label: 'Orgs using internally' },
        { value: '11K +', label: 'Active users' },
        { value: '163.5K', label: 'Items/month generated' },
        { value: '47K', label: 'Estimated hours saved' },
      ],
    },
    // TODO figure 2:2370 "Entry points from 6 to 3"
  ],
};

export default azureDevopsAgents;
