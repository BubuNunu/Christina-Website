import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import type { CaseStudyBlock, Picture, Stat } from './types';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';

export const Tag = ({ children }: { children: ReactNode }) => (
  <Box
    component="span"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      height: 29,
      px: '11px',
      borderRadius: '14.5px',
      bgcolor: colors.chip,
      fontSize: 14,
      textTransform: 'capitalize',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </Box>
);

export const CaseStudyHeader = ({ tags, title, summary }: { tags: string[]; title: string; summary: string }) => (
  <PageContainer sx={{ pt: { xs: 4, md: '39px' }, pb: { xs: 5, md: '40px' } }}>
    <Stack direction="row" flexWrap="wrap" gap={{ xs: 1.5, md: 3 }}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Stack>
    <Typography variant="h2" component="h1" sx={{ mt: 2, lineHeight: 'normal' }}>
      {title}
    </Typography>
    <Typography sx={{ maxWidth: 672, color: colors.body }}>{summary}</Typography>
  </PageContainer>
);

export const FigureImage = ({ src, alt, maxWidth, radius = 0 }: Picture & { maxWidth?: number; radius?: number }) => (
  <Box
    component="img"
    src={asset(src)}
    alt={alt}
    loading="lazy"
    sx={{ display: 'block', width: '100%', maxWidth, height: 'auto', mx: 'auto', borderRadius: `${radius}px` }}
  />
);

// Rich-text styles shared by section bodies: paragraphs, bold and links as in Figma.
export const bodyTextSx = {
  fontSize: 16,
  lineHeight: 'normal',
  color: colors.body,
  '& p': { m: 0 },
  '& p + p, & ul + p, & p + ul': { mt: '20px' },
  '& ul': { m: 0, pl: 3 },
  '& strong': { color: colors.text, fontWeight: 700 },
  '& a': { color: 'inherit', fontWeight: 700, textDecoration: 'underline' },
};

export const Section = ({ eyebrow, title, body }: { eyebrow: string; title: ReactNode; body: ReactNode }) => (
  <PageContainer sx={{ py: { xs: 7, md: '120px' } }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: { xs: 3, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: { md: 393 }, flexShrink: 0 }}>
        <Typography sx={{ fontSize: 24, fontWeight: 600, lineHeight: 'normal', color: colors.muted }}>
          {eyebrow}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ mt: 1, lineHeight: 'normal' }}>
          {title}
        </Typography>
      </Box>
      <Box sx={[{ maxWidth: { md: 594 } }, bodyTextSx]}>{body}</Box>
    </Box>
  </PageContainer>
);

export const Stats = ({ items }: { items: Stat[] }) => (
  <PageContainer sx={{ py: { xs: 4, md: 5 } }}>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: `repeat(${items.length}, 1fr)` },
        gap: { xs: 4, md: 3 },
      }}
    >
      {items.map((item) => (
        <Box key={item.label}>
          <Typography sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 700, lineHeight: 'normal' }}>{item.value}</Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600, lineHeight: 'normal', color: colors.statLabel }}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  </PageContainer>
);

export const CaseStudyBlockView = ({ block }: { block: CaseStudyBlock }) => {
  switch (block.kind) {
    case 'section':
      return <Section eyebrow={block.eyebrow} title={block.title} body={block.body} />;
    case 'figure':
      return (
        <PageContainer sx={{ py: { xs: 2, md: 3 } }}>
          <FigureImage src={block.src} alt={block.alt} maxWidth={block.maxWidth} />
          {block.caption && (
            <Typography sx={[bodyTextSx, { mt: 2, textAlign: 'center' }]}>{block.caption}</Typography>
          )}
        </PageContainer>
      );
    case 'stats':
      return <Stats items={block.items} />;
    case 'custom':
      return <>{block.content}</>;
  }
};
