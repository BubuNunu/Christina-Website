import { useState, type ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';

// Built from the Figma "Vibe coding" frame (2:2861).

interface ShotProps {
  src: string;
  alt: string;
  // Figma size of the picture, used for its aspect ratio and desktop width.
  width: number;
  height: number;
}

// A screenshot from Figma. Keeps its aspect ratio and shows a quiet placeholder if the file is missing.
const Shot = ({ src, alt, width, height }: ShotProps) => {
  const [failed, setFailed] = useState(false);
  return (
    <Box sx={{ width: '100%', maxWidth: width, aspectRatio: `${width} / ${height}` }}>
      {failed ? (
        <Box role="img" aria-label={alt} sx={{ width: '100%', height: '100%', borderRadius: '16px', bgcolor: colors.chip }} />
      ) : (
        <Box
          component="img"
          src={asset(src)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
        />
      )}
    </Box>
  );
};

// One row: pictures on the left, title + body on the right (Figma: 80px / 766px columns).
const Row = ({ title, media, children }: { title: string; media: ReactNode; children: ReactNode }) => (
  <PageContainer component="section" sx={{ pt: { xs: 7, md: '120px' } }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ width: { xs: '100%', md: 'auto' }, flex: { md: '0 1 504px' }, minWidth: 0 }}>{media}</Box>
      <Box sx={{ width: '100%', maxWidth: { md: 594 }, flex: { md: '0 1 594px' } }}>
        <Typography variant="h4" component="h2" sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 700, lineHeight: 'normal' }}>
          {title}
        </Typography>
        <Box
          sx={{
            mt: { xs: 2, md: 4 },
            fontSize: { xs: 18, md: 24 },
            lineHeight: 'normal',
            color: colors.body,
            '& p': { m: 0 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  </PageContainer>
);

const VibeCoding = () => (
  <Box sx={{ pb: { xs: 7, md: '120px' } }}>
    <PageContainer sx={{ pt: { xs: 4, md: '39px' } }}>
      <Typography variant="h2" component="h1" sx={{ lineHeight: 'normal' }}>
        Vibe coding
      </Typography>
      <Typography sx={{ maxWidth: 1051, color: colors.body }}>
        I love experimenting with AI as both a designer and a maker. At work, I use tools like VS Code and Figma Make to
        rapidly prototype and validate ideas. For personal projects, I build with Claude Code, Codex, and GPT, create
        custom AI skills, and experiment with creative tools like Kling AI, Doubao, and UTOPAI to bring fun ideas and
        videos to life.
      </Typography>
    </PageContainer>

    <Row
      title="Skills"
      media={
        <Shot
          src="images/vibe-coding/skills-collage.webp"
          alt="Collage of images made with custom AI style skills: cartoon stickers, flat illustrations and wool-felt art"
          width={492}
          height={477}
        />
      }
    >
      <p>
        I love turning creative experiments into reusable AI skills. I create custom .md skills for visual styles like
        cartoon stickers, flat illustrations, and wool-felt art, so I can recreate a consistent look whenever I need it.
        Building these skills has become one of my favorite ways to experiment with AI and turn playful ideas into
        repeatable creative systems.
      </p>
    </Row>

    <Row
      title="Open Meow AI"
      media={
        <Box sx={{ display: 'flex', gap: { xs: 2, md: '23px' }, maxWidth: 504 }}>
          <Box sx={{ flex: '238 1 0', minWidth: 0 }}>
            <Shot src="images/vibe-coding/open-meow-1.webp" alt="Open Meow AI app screen" width={238} height={461} />
          </Box>
          <Box sx={{ flex: '243 1 0', minWidth: 0 }}>
            <Shot src="images/vibe-coding/open-meow-2.webp" alt="Open Meow AI app screen" width={243} height={461} />
          </Box>
        </Box>
      }
    >
      <p>
        As a cat owner, I’ve always wondered: “What is my cat trying to tell me?” 🐱 When volunteering at animal
        shelter, I also noticed people ask the same question. That inspired me to design an AI-powered, all-in-one APP
        for cat owners—using audio, photos, and videos to interpret cat meow, track their daily life, and provide
        personalized care guidance. Turn every meow, photo and purr into meaningful insights. Open Meow helps you know
        your cat better.
      </p>
    </Row>
  </Box>
);

export default VibeCoding;
