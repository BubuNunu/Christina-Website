import { useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import PageContainer from './PageContainer';
import PillButton from './PillButton';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';
import { links } from '@/data/links';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Resume', href: links.resume },
  { label: 'Vibe coding', to: '/vibe-coding' },
];

const footerColumns = [
  {
    heading: 'DESIGN',
    items: [
      { label: 'UI/UX design', href: links.uxDesign },
      { label: '3D product design', href: links.productDesign },
      { label: 'Branding & logo', href: links.branding },
    ],
  },
  {
    heading: 'CONTACT',
    items: [
      { label: 'Email', href: links.email },
      { label: 'Medium', href: links.medium },
      { label: 'LinkedIn', href: links.linkedIn },
    ],
  },
];

const navLinkSx = {
  fontSize: { xs: 13, sm: 14 },
  lineHeight: '20px',
  color: 'common.white',
  whiteSpace: 'nowrap',
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backdropFilter: 'blur(5px)',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <PageContainer sx={{ py: { xs: 1.5, md: '19px' } }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Link component={RouterLink} to="/" aria-label="Rui Shi home" sx={{ display: 'flex', flexShrink: 0 }}>
              <Box
                component="img"
                src={asset('images/logo.png')}
                alt="Rui Shi"
                sx={{ width: { xs: 96, md: 125 }, height: 'auto', display: 'block' }}
              />
            </Link>
            <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 5 }}>
              {navLinks.map((item) =>
                item.to ? (
                  <Link key={item.label} component={RouterLink} to={item.to} underline="hover" sx={navLinkSx}>
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={[navLinkSx, { display: { xs: 'none', sm: 'inline' } }]}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <PillButton
                href="#contact"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Say Hello
              </PillButton>
            </Stack>
          </Stack>
        </PageContainer>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <PageContainer component="footer" id="contact" sx={{ pt: { xs: 6, md: '44px' }, pb: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'flex-start' }}
          spacing={{ xs: 5, md: 4 }}
          sx={{ ml: { md: '-25px' } }}
        >
          <Box sx={{ maxWidth: 665 }}>
            <Typography variant="h3" component="h2" sx={{ lineHeight: 'normal' }}>
              Let&apos;s get to know
              <br />
              each other!
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 20, lineHeight: 'normal', color: colors.bodyStrong }}>
              Feel free to drop me a message anytime
              <br />I am ready to connect with you!
            </Typography>
          </Box>
          <Stack direction="row" spacing={6} sx={{ pt: { md: '28px' }, pr: { md: '35px' } }}>
            {footerColumns.map((column) => (
              <Stack key={column.heading} spacing={3} sx={{ minWidth: { xs: 120, md: column.heading === 'DESIGN' ? 135 : 82 } }}>
                <Typography sx={{ fontSize: 16, lineHeight: '22px', color: colors.bodyStrong }}>
                  {column.heading}
                </Typography>
                {column.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      underline="hover"
                      sx={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'common.white' }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Typography key={item.label} sx={{ fontSize: 14, lineHeight: '20px', fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                  )
                )}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </PageContainer>
    </Box>
  );
};

export default Layout;
