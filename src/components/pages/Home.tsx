import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Link, Typography } from '@mui/material';
import PageContainer from '../PageContainer';
import PillButton from '../PillButton';
import { projects } from '@/data/projects';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';

const Home = () => (
  <>
    {/* Hero */}
    <PageContainer sx={{ pt: { xs: 4, md: '45px' }, pb: { xs: 6, md: '46px' } }}>
      <Typography variant="h1" sx={{ maxWidth: 717, lineHeight: 'normal' }}>
        Building AI products from zero to scale
      </Typography>
      <Typography
        sx={{
          mt: { xs: 3, md: '26px' },
          fontSize: { xs: 22, sm: 28, md: 36 },
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
              sx={{
                display: 'block',
                '&:hover img': { transform: 'scale(1.02)' },
                '&:hover h2': { color: colors.accent },
              }}
            >
              <Box sx={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '614 / 348' }}>
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
              </Box>
              <Typography variant="h4" component="h2" sx={{ mt: '30px', fontWeight: 700, transition: 'color 0.2s' }}>
                {project.title}
              </Typography>
              <Typography sx={{ mt: 1, color: colors.bodyStrong }}>{project.summary}</Typography>
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
          <Typography variant="h3" component="h2">
            About me
          </Typography>
          <Typography sx={{ mt: '12px', color: colors.bodyStrong }}>
            Hi, I’m Rui Shi, a product designer passionate about design, AI, and turning new ideas into meaningful
            experiences.
          </Typography>
          <Typography sx={{ mt: '28px', color: colors.bodyStrong }}>
            Outside of work, you’ll find me volunteering at animal shelters and Asian community events, exploring DIY
            projects, or out hiking and mushroom foraging. 🍄 I also have a cat, her name is Kiki. 🐱
          </Typography>
          <PillButton href="#contact" sx={{ mt: '38px', px: '18px' }}>
            Say Hello
          </PillButton>
        </Box>
        <Box
          component="img"
          src={asset('images/home/about-photo.webp')}
          alt="Rui with her cat Kiki"
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

export default Home;
