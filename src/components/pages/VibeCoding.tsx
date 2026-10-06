import { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import PageContainer from '../PageContainer';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';

interface GalleryItem {
  id: string;
  kind: 'image' | 'gif' | 'video';
  src: string;
  alt: string;
  width: number;
  height: number;
  poster?: string;
  frame?: boolean;
  crop?: { x: number; y: number; width: number; height: number };
}

// Add each new image, GIF, or video here. Dimensions reserve its space while it loads.
// The crop rectangles show individual artworks from the existing skills collage.
const galleryItems: GalleryItem[] = [
  {
    id: 'cozy-corner',
    kind: 'image',
    src: 'images/vibe-coding/skills-collage.webp',
    alt: 'A sunny, cozy living room with a grey cat and matching illustrated stickers',
    width: 984,
    height: 954,
    crop: { x: 0, y: 0, width: 984, height: 652 },
  },
  {
    id: 'open-meow',
    kind: 'image',
    src: 'images/vibe-coding/open-meow-1.webp',
    alt: 'Open Meow AI phone prototype for recording and analyzing a cat’s meow',
    width: 506,
    height: 942,
    frame: true,
  },
  {
    id: 'felt-fruit',
    kind: 'image',
    src: 'images/vibe-coding/skills-collage.webp',
    alt: 'Wool-felt grapefruit, apple, and kiwi in soft pastel colors',
    width: 984,
    height: 954,
    crop: { x: 644, y: 668, width: 340, height: 286 },
  },
  {
    id: 'wave-architecture',
    kind: 'image',
    src: 'images/vibe-coding/skills-collage.webp',
    alt: 'A flowing modern building illustrated in cream and pale blue',
    width: 984,
    height: 954,
    crop: { x: 0, y: 668, width: 430, height: 286 },
  },
  {
    id: 'coral-architecture',
    kind: 'image',
    src: 'images/vibe-coding/skills-collage.webp',
    alt: 'Coral-colored geometric architecture against a blue sky',
    width: 984,
    height: 954,
    crop: { x: 442, y: 668, width: 188, height: 286 },
  },
];

// Mix the cards once per visit; keep their positions stable during interaction.
const shuffle = (items: GalleryItem[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
};

const MediaCard = ({ item, reducedMotion }: { item: GalleryItem; reducedMotion: boolean }) => {
  const crop = item.crop;
  const src = reducedMotion && item.kind === 'gif' && item.poster ? item.poster : item.src;

  return (
    <Box
      component="figure"
      data-play-card={item.id}
      sx={{
        m: 0,
        mb: '12px',
        display: 'inline-block',
        verticalAlign: 'top',
        width: '100%',
        breakInside: 'avoid',
        borderRadius: '20px',
        border: '1px solid #282828',
        overflow: 'hidden',
        bgcolor: item.frame ? '#222222' : '#111111',
        p: item.frame ? '24px' : 0,
      }}
    >
      {item.kind === 'video' ? (
        <Box
          component="video"
          src={asset(item.src)}
          poster={item.poster ? asset(item.poster) : undefined}
          aria-label={item.alt}
          width={item.width}
          height={item.height}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          sx={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${item.width} / ${item.height}` }}
        />
      ) : crop ? (
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: `${crop.width} / ${crop.height}` }}>
          <Box
            component="img"
            src={asset(src)}
            alt={item.alt}
            loading="lazy"
            width={item.width}
            height={item.height}
            sx={{
              position: 'absolute',
              display: 'block',
              width: `${(item.width / crop.width) * 100}%`,
              height: `${(item.height / crop.height) * 100}%`,
              maxWidth: 'none',
              left: `${(-crop.x / crop.width) * 100}%`,
              top: `${(-crop.y / crop.height) * 100}%`,
            }}
          />
        </Box>
      ) : (
        <Box
          component="img"
          src={asset(src)}
          alt={item.alt}
          loading="lazy"
          width={item.width}
          height={item.height}
          sx={{ display: 'block', width: item.frame ? '78%' : '100%', height: 'auto', mx: 'auto' }}
        />
      )}
    </Box>
  );
};

const Play = () => {
  const [items] = useState(() => shuffle(galleryItems));
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <PageContainer sx={{ pt: { xs: '40px', md: '60px' }, pb: '60px' }}>
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: '40px', sm: '60px', md: '60px', lg: '60px' },
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.025em',
          color: colors.text,
        }}
      >
        Playground
      </Typography>
      <Typography
        sx={{
          mt: '8px',
          fontSize: { xs: '20px', sm: '24px', md: '24px', lg: '24px' },
          lineHeight: 1.4,
          color: '#E6E6E6',
        }}
      >
        Crafting experiences
      </Typography>
      <Box
        component="section"
        aria-label="Play gallery"
        sx={{ mt: { xs: '40px', md: '72px' }, columnCount: { xs: 1, sm: 2, md: 3 }, columnGap: '12px' }}
      >
        {items.map((item) => (
          <MediaCard key={item.id} item={item} reducedMotion={reducedMotion} />
        ))}
      </Box>
    </PageContainer>
  );
};

export default Play;
