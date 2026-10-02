import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';

// Built from the Figma "About me" frame (2:2778).

interface PhotoProps {
  src: string;
  alt: string;
  // Figma width / height, used to keep each slot's proportions.
  width: number;
  height: number;
  radius?: number;
}

// A rounded image slot that keeps its Figma aspect ratio and shows a quiet
// placeholder tile if the image has not been exported yet.
const Photo = ({ src, alt, width, height, radius = 20 }: PhotoProps) => {
  const [failed, setFailed] = useState(false);
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: `${width} / ${height}`,
        borderRadius: `${radius}px`,
        overflow: 'hidden',
        bgcolor: failed ? colors.chip : 'transparent',
      }}
    >
      {!failed && (
        <Box
          component="img"
          src={asset(src)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </Box>
  );
};

// Photo row 2:2834 (three photos side by side, 1280px total).
const rowPhotos = [
  { src: 'images/about/photo-1.webp', alt: 'Rui portrait', width: 423, height: 427 },
  { src: 'images/about/photo-2.webp', alt: 'Rui at an event', width: 347, height: 427 },
  { src: 'images/about/photo-3.webp', alt: 'Rui with friends', width: 464, height: 427 },
];

const sectionTitleSx = { fontSize: { xs: 32, md: 40 }, fontWeight: 700, lineHeight: 'normal' };
const sectionBodySx = { mt: { xs: 2, md: '33px' }, fontSize: { xs: 18, md: 24 }, lineHeight: 'normal', color: colors.body };

const TwoColumn = ({
  picture,
  title,
  body,
}: {
  picture: PhotoProps;
  title: string;
  body: string;
}) => (
  <PageContainer sx={{ pt: { xs: 7, md: '120px' } }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 492, flexShrink: 0 }}>
        <Photo {...picture} radius={0} />
      </Box>
      <Box sx={{ maxWidth: { md: 594 } }}>
        <Typography component="h2" sx={sectionTitleSx}>
          {title}
        </Typography>
        <Typography sx={sectionBodySx}>{body}</Typography>
      </Box>
    </Box>
  </PageContainer>
);

// "My experiences" list 2:2839.
const experiences = [
  {
    dates: '2022 - Now',
    company: 'Microsoft',
    description:
      'Led AI products from vision to launch, transforming complex enterprise workflows into scalable experiences used by millions.',
  },
  {
    dates: '2020 - 2022',
    company: 'Waste Management',
    description:
      'Led digital experiences for 21M+ customers while building WM’s first design system and shaping a unified experience across web and mobile.',
  },
  {
    dates: '2018 - 2020',
    company: 'Optima Ninja',
    description:
      'Served as founding designer, building 0→1 SaaS products and 50+ digital experiences from the ground up, driving 120% growth in qualified leads.',
  },
  {
    dates: '2018 - 2020',
    company: 'ASU',
    description:
      'Designed interactive learning and immersive 3D experiences, collaborating across disciplines to engage thousands of students and 2K+ exhibition visitors.',
  },
];

const About = () => (
  <>
    {/* Intro header 2:2779 + intro text 2:2833 */}
    <PageContainer sx={{ pt: { xs: 4, md: '39px' } }}>
      <Typography variant="h2" component="h1" sx={{ lineHeight: 'normal' }}>
        About me
      </Typography>
      <Typography
        sx={{
          mt: { xs: 2, md: '20px' },
          maxWidth: 1136,
          fontSize: { xs: 24, sm: 32, md: 40 },
          fontWeight: 500,
          lineHeight: 'normal',
          color: colors.bodyStrong,
        }}
      >
        Hi 👋! I’m Rui — a product designer turning complex problems into scalable experiences, from AI products at
        Microsoft to design systems at WM and 0→1 products at Optima Ninja.
      </Typography>
    </PageContainer>

    {/* Photo row 2:2834 */}
    <PageContainer sx={{ pt: { xs: 6, md: '120px' } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: '23px' },
          alignItems: 'flex-start',
        }}
      >
        {rowPhotos.map((photo) => (
          <Box key={photo.src} sx={{ flex: { sm: `${photo.width} 1 0` }, minWidth: 0, width: { xs: '100%', sm: 'auto' } }}>
            <Photo {...photo} />
          </Box>
        ))}
      </Box>
    </PageContainer>

    {/* Two-column blocks 2:2804 */}
    <TwoColumn
      picture={{ src: 'images/about/at-work.webp', alt: 'Collage of Rui at work', width: 492, height: 427 }}
      title="At Work"
      body="I’m passionate about turning complex problems into simple, thoughtful experiences. I love talking with users, uncovering the “why” behind their needs, and using systems thinking to design solutions that scale. I’m also curious about new ways of building—using AI and vibe coding to quickly turn ideas into prototypes and learn through making. Based in Redmond, WA, designing at the intersection of people, systems, and AI."
    />
    <TwoColumn
      picture={{
        src: 'images/about/outside-of-work.webp',
        alt: 'Collage of Rui volunteering, hiking, foraging and with her cat',
        width: 492,
        height: 426,
      }}
      title="Outside of work"
      body="Outside of work, I’m usually volunteering, exploring, or making something. You’ll find me helping at Animal shelters, Asian & women’s communities, hiking in nature, forging mushrooms in forest, finding clams on the beach, walking my cat, cooking yummy food, working on DIY projects, taking photos, and simply having fun along the way."
    />

    {/* My experiences 2:2839 */}
    <PageContainer sx={{ pt: { xs: 8, md: '120px' } }}>
      <Typography component="h2" sx={{ fontSize: 24, fontWeight: 600, lineHeight: 'normal', color: colors.muted }}>
        My experiences
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mt: { xs: 3, md: '63px' } }}>
        {experiences.map((item, index) => (
          <Box
            component="li"
            key={item.company}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '400px 462px 1fr' },
              alignItems: 'start',
              rowGap: 1,
              pt: index === 0 ? 0 : { xs: 3, md: '38px' },
              pb: index === experiences.length - 1 ? 0 : { xs: 3, md: '38px' },
              borderBottom: index === experiences.length - 1 ? 'none' : `1px solid ${colors.divider}`,
            }}
          >
            <Typography sx={{ fontSize: { xs: 18, md: 24 }, lineHeight: 'normal', color: colors.muted, mt: { md: '6px' } }}>
              {item.dates}
            </Typography>
            <Typography component="h3" sx={{ fontSize: 24, fontWeight: 700, lineHeight: 'normal', mt: { md: '6px' } }}>
              {item.company}
            </Typography>
            <Typography sx={{ fontSize: 16, lineHeight: '22px', color: colors.body, maxWidth: { md: 415 } }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </PageContainer>

    {/* Closing line 2:2832 */}
    <PageContainer sx={{ pt: { xs: 8, md: '120px' }, pb: { xs: 6, md: '150px' } }}>
      <Typography variant="h2" component="p" sx={{ lineHeight: 'normal' }}>
        Don’t hesitate to drop me a message — I’m always happy to connect! 👋
      </Typography>
    </PageContainer>
  </>
);

export default About;
