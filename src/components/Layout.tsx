import { useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import PageContainer from './PageContainer';
import PillButton from './PillButton';
import WorkMenu from './WorkMenu';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';
import { links } from '@/data/links';

const navLinks = [
  { label: 'Play', to: '/vibe-coding' },
  { label: 'About', to: '/about' },
  { label: 'Resume', href: links.resume },
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

// Header items get a soft frosted pill on hover/focus instead of an underline.
// The current page keeps the pill (via aria-current / aria-expanded).
const navLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: { xs: 13, sm: 14 },
  lineHeight: '20px',
  color: 'rgba(255, 255, 255, 0.8)',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  px: { xs: 1, sm: '14px' },
  py: '8px',
  borderRadius: '999px',
  transition: 'background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
  '&:hover, &:focus-visible, &[aria-current="page"], &[aria-expanded="true"]': {
    color: '#ffffff',
    bgcolor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 18px rgba(172, 160, 245, 0.25)',
    textDecoration: 'none',
  },
  '&:focus-visible': { outline: `2px solid ${colors.accent}`, outlineOffset: '2px' },
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
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: '12px' }}>
              <WorkMenu sx={navLinkSx} active={pathname.startsWith('/projects/')} />
              {navLinks.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    component={RouterLink}
                    to={item.to}
                    underline="none"
                    aria-current={pathname === item.to ? 'page' : undefined}
                    sx={navLinkSx}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={[navLinkSx, { display: { xs: 'none', sm: 'inline-flex' } }]}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <PillButton
                href={links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  ml: { sm: '28px !important' },
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
                  '&:hover': {
                    bgcolor: '#ffffff',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 24px rgba(172, 160, 245, 0.45)',
                  },
                }}
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
