import type { ReactNode } from 'react';

export interface Stat {
  value: string;
  label: string;
}

export interface Picture {
  // Path under public/, e.g. 'images/ms-places/hero.webp'
  src: string;
  alt: string;
}

export type CaseStudyBlock =
  // Two-column text section: grey eyebrow + white title on the left, body on the right.
  | { kind: 'section'; eyebrow: string; title: ReactNode; body: ReactNode }
  // One exported Figma frame shown as a single picture across the content width.
  | ({ kind: 'figure'; caption?: ReactNode; maxWidth?: number } & Picture)
  // Row of big numbers with labels.
  | { kind: 'stats'; items: Stat[] }
  // Escape hatch for layouts the blocks above can't express.
  | { kind: 'custom'; content: ReactNode };

export interface CaseStudyContent {
  tags: string[];
  hero: Picture;
  blocks: CaseStudyBlock[];
}
