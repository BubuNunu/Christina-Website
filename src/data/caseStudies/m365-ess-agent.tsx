import type { CaseStudyContent } from '@/components/caseStudy/types';

// Figma frame 2:1799. Text copied from the Figma text layers (bold spans not verified).
// TODO: figure blocks for 2:1852, 2:1882, 2:1922, 2:1960, 2:1999, 2:2005 and the hero (2:1834)
// still need screenshots; the Figma MCP call limit blocked them.
const m365EssAgent: CaseStudyContent = {
  tags: ['Think big', 'AI agent project'],
  hero: {
    src: 'images/home/m365-ess-agent.webp',
    alt: 'Employee Self-Service Agent in Microsoft 365 Copilot shown on phone and desktop',
  },
  blocks: [
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'What is the ESS Agent?',
      body: (
        <p>
          The Employee Self-Service Agent is an enterprise AI agent in Microsoft 365 Copilot, designed for large
          organizations to help employees ask questions, find services and complete workplace tasks through a single
          AI-powered entry point. Instead of requiring users to know which tool or service category to start with, the
          agent lets them describe what they need in natural language and routes them toward the right information or
          workflow across HR, IT and RE&amp;F. I own the facility request flow of ESS Agent.
        </p>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Introduction',
      title: 'How did the AI Vision shape the product?',
      body: (
        <>
          <p>
            While designing the ESS Agent, I realized that a chat-based experience alone wasn’t enough. For example,
            when users asked to submit a facilities ticket, the agent could only redirect them to a browser and provide
            step-by-step instructions—while users expected the agent to complete the task directly.
          </p>
          <p>
            Looking beyond the agent, I also discovered a broader problem: many campus apps and websites had not been
            modernized for years, creating fragmented experiences with limited AI capabilities. The ESS Agent itself
            also had significant limitations—it couldn’t complete transactions such as payments, ticket creation, or
            wayfinding.
          </p>
          <p>
            This led me to think beyond the chatbot and explore a bigger question: What if AI could transform the entire
            campus experience—not just answer questions?
          </p>
          <p>
            I developed a series of concepts and brought them to life through three AI vision videos, imagining a more
            intelligent, connected, and mobile-first campus experience. These videos were well received by leadership,
            stakeholders, and users, helping influence the ESS and Facilities roadmaps and building stakeholder support
            to reinvest in the MyHub app with new AI capabilities.
          </p>
        </>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Solution',
      title: 'From Insights to Design Strategy',
      body: (
        <p>
          I hosted 4 workshops to explore ideas across commute, dining, facilities, and other campus experiences.
          Through research and ideation, we identified growing user needs for end-to-end task completion,
          personalization, cross-platform integration, and mobile-first experiences. These insights shaped three
          principles for my AI vision: Productive, Personalized, and Contextual.
        </p>
      ),
    },
    {
      kind: 'stats',
      items: [
        { value: '4', label: 'Workshops' },
        { value: '5', label: 'Journey map' },
        { value: '∞', label: 'Ideas' },
        { value: '100+', label: 'Design screens' },
        { value: '3', label: 'Vision videos' },
      ],
    },
    {
      kind: 'section',
      eyebrow: 'Solution',
      title: 'Bringing the Vision to Life',
      body: (
        <p>
          For each vision, I followed an iterative process: sketch → design → storyboard → prototype → video,
          continuously sharing concepts with the team and gathering user feedback. I also created end-to-end journey
          maps to connect each concept into a cohesive experience. Across three vision videos, I explored AR
          wayfinding, conversational AI, food ordering, and direct ticket creation—reimagining the ESS Agent from a
          text-based chatbot into an intelligent assistant that can both answer questions and complete tasks.
        </p>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: 'Result & impact',
      body: (
        <p>
          These videos were well received by leadership, stakeholders, and users, helping influence the ESS and
          Facilities roadmaps and building stakeholder support to reinvest in the MyHub app with new AI capabilities.
        </p>
      ),
    },
    {
      kind: 'section',
      eyebrow: 'Outcome',
      title: 'From 10 Minutes to 30 Seconds',
      body: (
        <p>
          Previously, submitting a facilities request could take ~10 minutes through the Facilities Portal or MyHub—and
          even longer through back-and-forth conversations with the ESS Agent. With the new AI-powered experience, users
          can create and submit a ticket directly through the ESS Agent in ~30 seconds—turning a multi-step process into
          a simple, end-to-end AI interaction.
        </p>
      ),
    },
  ],
};

export default m365EssAgent;
