import { useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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
}

// Add each new image, GIF, or video here. Dimensions reserve its space while it loads.
const galleryItems: GalleryItem[] = [
  {
    id: 'cat',
    kind: 'image',
    src: 'images/vibe-coding/cat.png',
    alt: 'A glowing pastel cat with iridescent pink, purple, and blue colors',
    width: 1448,
    height: 1086,
  },
  {
    id: 'logo-design',
    kind: 'gif',
    src: 'images/vibe-coding/logo-design.gif',
    poster: 'images/vibe-coding/logo-design-poster.png',
    alt: 'Animated Ameriduo logo and brand design on a tablet',
    width: 508,
    height: 335,
  },
  {
    id: 'open-meow',
    kind: 'video',
    src: 'images/vibe-coding/open-meow-screen.mp4',
    poster: 'images/vibe-coding/open-meow-screen-poster.jpg',
    alt: 'OpenMeow mobile app prototype demonstration',
    width: 960,
    height: 1852,
    frame: true,
  },
  {
    id: 'rushable',
    kind: 'video',
    src: 'images/vibe-coding/rushable.mp4',
    poster: 'images/vibe-coding/rushable-poster.jpg',
    alt: 'Rushable restaurant platform website demonstration',
    width: 1440,
    height: 720,
  },
  {
    id: 'school-bus-app',
    kind: 'video',
    src: 'images/vibe-coding/school-bus-app.mp4',
    poster: 'images/vibe-coding/school-bus-app-poster.jpg',
    alt: 'Animated school bus mobile app interface designs',
    width: 854,
    height: 428,
  },
  {
    id: 'sketch',
    kind: 'image',
    src: 'images/vibe-coding/sketch.jpg',
    alt: 'Colorful illustration of a creative team launching a rocket',
    width: 1400,
    height: 1400,
  },
  {
    id: 'baby-shower-1',
    kind: 'image',
    src: 'images/vibe-coding/baby-shower-1.jpg',
    alt: 'Framed baby shower invitation with a couple holding teddy bears and a floral border',
    width: 1706,
    height: 2048,
  },
  {
    id: 'baby-shower-2',
    kind: 'image',
    src: 'images/vibe-coding/baby-shower-2.jpg',
    alt: 'Framed baby shower illustration of a couple in a flower field beneath a teal sky',
    width: 2048,
    height: 1536,
  },
  {
    id: 'mushroom',
    kind: 'video',
    src: 'images/vibe-coding/mushroom.mp4',
    poster: 'images/vibe-coding/mushroom-poster.jpg',
    alt: 'Animated mushroom house with glowing windows in a magical forest',
    width: 1280,
    height: 720,
  },
  {
    id: 'skills-2',
    kind: 'image',
    src: 'images/vibe-coding/skills-2.png',
    alt: 'Watercolor birthday cat with a pink crown, plush companions, cake, and matching stickers',
    width: 1536,
    height: 1024,
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
  const src = reducedMotion && item.kind === 'gif' && item.poster ? item.poster : item.src;

  return (
    <Box
      component="figure"
      data-play-card={item.id}
      sx={{
        m: 0,
        display: 'block',
        width: '100%',
        borderRadius: '20px',
        border: '2px solid #282828',
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
          sx={{
            display: 'block',
            width: item.frame ? '78%' : '100%',
            height: 'auto',
            aspectRatio: `${item.width} / ${item.height}`,
            objectFit: 'contain',
            mx: 'auto',
            // Match the rounded phone screen at every display size.
            borderRadius: item.frame ? '15% / 7.78%' : 0,
          }}
        />
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
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const columnCount = desktop ? 3 : tablet ? 2 : 1;
  const columns = Array.from({ length: columnCount }, () => [] as GalleryItem[]);
  items.forEach((item, index) => columns[index % columnCount].push(item));

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
        sx={{
          mt: { xs: '40px', md: '72px' },
          display: 'grid',
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
          gap: '12px',
          alignItems: 'start',
        }}
      >
        {columns.map((column, index) => (
          <Box key={index} data-play-column={index} sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {column.map((item) => (
              <MediaCard key={item.id} item={item} reducedMotion={reducedMotion} />
            ))}
          </Box>
        ))}
      </Box>
    </PageContainer>
  );
};

export default Play;
