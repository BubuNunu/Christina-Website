import { useEffect, type SyntheticEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import PillButton from '../PillButton';
import { links } from '@/data/links';
import { projects } from '@/data/projects';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';
import { keepMuted } from '@/utils/video';

// Cards with a hover clip play it while hovered/focused and rewind when left.
const playHoverVideo = (event: SyntheticEvent) => {
  void event.currentTarget.querySelector('video')?.play().catch(() => undefined);
};
const stopHoverVideo = (event: SyntheticEvent) => {
  const video = event.currentTarget.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
};

// Phones and tablets can't hover, so there the clip plays while the card is on screen.
const useAutoPlayWithoutHover = () => {
  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ target, isIntersecting }) => {
          const video = target as HTMLVideoElement;
          if (isIntersecting) {
            video.style.opacity = '1';
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLVideoElement>('video[data-hover-video]').forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);
};

const Home = () => {
  useAutoPlayWithoutHover();
  return (
    <>
      {/* Hero */}
      <PageContainer sx={{ pt: { xs: 4, md: '45px' }, pb: { xs: 6, md: '46px' } }}>
        <Typography variant="h1" sx={{ maxWidth: 717, fontSize: { xs: 'clamp(28px, 8.5vw, 32px)', sm: 48, md: 60, lg: 60 }, lineHeight: 1.2 }}>
          Building AI products
          <br />
          from zero to scale
        </Typography>
        <Typography
          sx={{
            mt: { xs: 3, md: '26px' },
            fontSize: { xs: 28, sm: 28, md: 28, lg: 28 },
            lineHeight: 'normal',
            fontWeight: 500,
            color: colors.bodyStrong,
          }}
        >
          Hi I’m Rui - Product designer{' '}
          <Box component="span" sx={{ color: colors.accent, fontWeight: 600 }}>
            @ Microsoft.
          </Box>
          <Box component="span" sx={{ display: 'block', color: colors.subtle }}>
            Previously at WM, Optima Ninja.
          </Box>
        </Typography>
      </PageContainer>

      {/* Project cards */}
      <PageContainer sx={{ pt: { md: 4 } }}>
        <Grid container columnSpacing={6} rowSpacing={{ xs: 6, md: 7 }}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.slug}>
              <Link
                component={RouterLink}
                to={`/projects/${project.slug}`}
                underline="none"
                color="inherit"
                onMouseEnter={playHoverVideo}
                onMouseLeave={stopHoverVideo}
                onFocus={playHoverVideo}
                onBlur={stopHoverVideo}
                sx={{
                  display: 'block',
                  '&:hover img, &:hover video': { transform: 'scale(1.02)' },
                  '&:hover video, &:focus-visible video': { opacity: 1 },
                  '&:hover h2': { color: colors.accent },
                }}
              >
                <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '614 / 348' }}>
                  <Box
                    component="img"
                    src={asset(project.image)}
                    alt={project.title}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {project.hoverVideo && (
                    <Box
                      component="video"
                      ref={keepMuted}
                      muted
                      loop
                      playsInline
                      preload="none"
                      data-hover-video
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      <source src={asset(`${project.hoverVideo}.webm`)} type="video/webm" />
                      <source src={asset(`${project.hoverVideo}.mp4`)} type="video/mp4" />
                    </Box>
                  )}
                </Box>
                <Typography variant="h4" component="h2" sx={{ mt: '30px', fontSize: { xs: 24, sm: 24, md: 24, lg: 24 }, fontWeight: 700, lineHeight: '32px', color: colors.bodyStrong, transition: 'color 0.2s' }}>
                  {project.title}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: { xs: 18, sm: 18, md: 18, lg: 18 }, color: '#E6E6E6' }}>{project.cardSummary ?? project.summary}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </PageContainer>

      {/* About me */}
      <PageContainer sx={{ pt: { xs: 10, md: '120px' }, pb: { xs: 8, md: '139px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ maxWidth: 610 }}>
            <Typography variant="h3" component="h2" sx={{ fontSize: { xs: 36, sm: 48, md: 48, lg: 48 } }}>
              About me
            </Typography>
            <Typography sx={{ mt: '12px', fontSize: { xs: 20, sm: 20, md: 20, lg: 20 }, color: '#E6E6E6' }}>
              Hi, I’m Rui Shi, a product designer passionate about design, AI, and turning new ideas into meaningful
              experiences.
            </Typography>
            <Typography sx={{ mt: '28px', fontSize: { xs: 20, sm: 20, md: 20, lg: 20 }, color: '#E6E6E6' }}>
              Outside of work, you’ll find me volunteering at animal shelters and Asian community events, exploring DIY
              projects, or out hiking and mushroom foraging. 🍄 I also have a cat, her name is Kiki. 🐱
            </Typography>
            <PillButton href={links.linkedIn} target="_blank" rel="noopener noreferrer" sx={{ mt: '38px', px: '18px' }}>
              Say Hello
            </PillButton>
          </Box>
          <Box
            component="img"
            src={asset('images/home/about-photo.webp')}
            alt="Rui holding her cat Kiki"
            loading="lazy"
            sx={{
              width: { xs: '70%', sm: 316 },
              maxWidth: 316,
              aspectRatio: '316 / 352',
              objectFit: 'cover',
              borderRadius: '319px 319px 0 0',
              display: 'block',
              flexShrink: 0,
            }}
          />
        </Box>
      </PageContainer>
    </>
  );
};

export default Home;
