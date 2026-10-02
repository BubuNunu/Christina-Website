import { Box } from '@mui/material';
import { Stats } from '@/components/caseStudy/CaseStudyBlocks';
import type { CaseStudyContent } from '@/components/caseStudy/types';

// Content from Figma frame 2:2203 ("Azure DevOps Agents"); text, paragraph breaks and bold/link
// spans match the decoded Figma text layers. Pictures are the designer's 2x exports from Google
// Drive (ADO-1..12); captions and labels inside those frames are part of the pictures.

// Bold span that keeps the body colour (Figma bolds these without turning them white).
const boldSx = { fontWeight: 700 };

const azureDevopsAgents: CaseStudyContent = {
  tags: ['developer tool', 'AI agents'],
  hero: {
    src: 'images/azure-devops-agents/ado-1.webp',
    alt: 'Azure DevOps work item page in a browser with the AI work item assistant menu open, offering child item generator, work item editor and work item insights',
  },
  blocks: [
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'What is Azure DevOps?',
      body: (
        <>
          <p>
            Azure DevOps (ADO) is Microsoft’s end-to-end{' '}
            <Box component="span" sx={boldSx}>
              developer platform
            </Box>{' '}
            for planning, building, and shipping
            software, helping developers and engineering teams manage work throughout the product development life
            cycle.
          </p>
          <p>
            I led 2 designers to bring UX into Azure DevOps Copilot for the first time, simplifying 6 entry points to 3
            and scaling the experience to <strong>11K users, 163.5K+ work items/month, and ~47K hours saved.</strong>
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
            <strong>
              How might we simplify 6 fragmented entry points and create a more intuitive, scalable Copilot experience
              for both internal and external Azure DevOps users?
            </strong>
          </p>
        </>
      ),
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-2.webp',
      alt: '6 entry points: an Azure DevOps work item page with pointers on the six places Copilot agents could be opened, from the side nav and header to the work item tabs and AI Work Item Editor',
    },
    {
      kind: 'section',
      eyebrow: 'My approach',
      title: (
        <>
          Auditing & Simplifying
          <br />
          the Experience
        </>
      ),
      body: (
        <>
          <p>
            I started by auditing all 6 entry points—their functionality, interaction patterns, and limitations. I then
            mapped and grouped them by interaction type and context, from platform and board level to individual work
            items.
          </p>
          <p>
            This revealed two core patterns: <strong>Chat-based Agents</strong> for conversational assistance and{' '}
            <strong>Action-based Agents</strong> for completing specific tasks.
          </p>
        </>
      ),
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-3.webp',
      alt: 'Auditing 6 entry points: an audit board of screenshots documenting each agent entry point and its flows',
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-4.webp',
      alt: 'Grouping diagram: DevOps assistant, board insights, work item editor, work item generator, work item insight and child item generator mapped to platform, board and work item levels, then grouped into chat-based (DevOps Assistant) and action-based (Work item Assistant) agents',
    },
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
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-5.webp',
      alt: 'My first proposal: two entry points, one at the work item level and one at the board level',
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-6.webp',
      alt: 'Due to tech limitation, entry points from 6 to 3: platform level, board level and work item level',
    },
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
            existing information architecture made generated content difficult to scan and understand.
          </p>
          <p>
            I redesigned the experience to create a clearer hierarchy, easier multi-item review, and more intuitive save
            flow, helping users confidently review AI-generated content before taking action.
          </p>
        </>
      ),
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-7.webp',
      alt: 'Old child item generator issues: tab used as an action, unclear hover and click, and unclear open and save',
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-8.webp',
      alt: 'Design proposal A/B testing: option A with a side-by-side preview and option B with a pop-up window preview',
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-9.webp',
      alt: 'A/B test results: 66% of users prefer option A, the side-by-side preview, and 90% think it improves on the old design, shown with the research notes and the final child item generator',
    },
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
            existing information architecture made generated content difficult to scan and understand.
          </p>
          <p>
            I redesigned the experience to create a clearer hierarchy, easier multi-item review, and more intuitive save
            flow, helping users confidently review AI-generated content before taking action.
          </p>
        </>
      ),
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-10.webp',
      alt: 'Old DevOps Assistant: a small pop-up chat window, with issues listed: interaction limitations, outdated Copilot style, weak starter prompts and poor discoverability',
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-11.webp',
      alt: 'New DevOps Assistant: a full-size chat opened from the side nav, in the Copilot Bebop style with starter prompts, saved prompts and chat history',
    },
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
          <p>
            We also won the
            <a
              href="https://realcomm.com/news/1224/1/realcomm-ibcon-2026-digie-award-winners-announced"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Realcomm IBcon 2026 Digie Award
            </a>
            !
          </p>
        </>
      ),
    },
    {
      // Figma sets this page's stat labels in Manrope Regular 20 (the kit uses SemiBold).
      kind: 'custom',
      content: (
        <Box sx={{ '& .MuiTypography-root + .MuiTypography-root': { fontWeight: 400 } }}>
          <Stats
            items={[
              { value: '1.1K+', label: 'Orgs using internally' },
              { value: '11K +', label: 'Active users' },
              { value: '163.5K', label: 'Items/month generated' },
              { value: '47K', label: 'Estimated hours saved' },
            ]}
          />
        </Box>
      ),
    },
    {
      kind: 'figure',
      src: 'images/azure-devops-agents/ado-12.webp',
      alt: 'Entry points from 6 to 3: the final platform-level, board-level and work-item-level entry points',
    },
  ],
};

export default azureDevopsAgents;
