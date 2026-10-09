import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import PageContainer from './PageContainer';
import PillButton from './PillButton';
import NavLabel from './NavLabel';
import WorkMenu from './WorkMenu';
import MobileMenu from './MobileMenu';
import { colors } from '@/theme';
import { asset } from '@/utils/asset';
import { links } from '@/data/links';

const navLinks = [
  { label: 'Play', to: '/play' },
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
      { label: 'Dribbble', href: 'https://dribbble.com/ruishidesign' },
      { label: 'LinkedIn', href: links.linkedIn },
    ],
  },
];

// Header items turn purple and bold on hover/focus; the current page stays that way.
// Each label reserves its bold width (see NavLabel) so neighbours don't shift.
const navLinkSx = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: { xs: 16, sm: 16, md: 16, lg: 16 },
  lineHeight: '22px',
  fontWeight: 400,
  color: '#ffffff',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  px: '14px',
  py: '8px',
  borderRadius: '8px',
  transition: 'color 0.2s ease',
  '& .nav-label': {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&::after': {
      content: 'attr(data-label)',
      fontWeight: 700,
      height: 0,
      overflow: 'hidden',
      visibility: 'hidden',
    },
  },
  '&:hover, &:focus-visible, &[aria-current="page"], &[aria-expanded="true"]': {
    color: colors.accent,
    fontWeight: 700,
    textDecoration: 'none',
  },
  '&:focus-visible': { outline: `2px solid ${colors.accent}`, outlineOffset: '2px' },
};

// Footer links use the same purple, bold interaction as the header.
const footerLinkSx = {
  ...navLinkSx,
  fontWeight: 600,
  px: 0,
  py: 0,
  '& .nav-label': {
    ...navLinkSx['& .nav-label'],
    alignItems: 'flex-start',
  },
};

// Below this width the header items don't fit in one row, so they move into a menu.
const phoneHeader = '@media (max-width: 719.95px)';

const Layout = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => setHeaderHeight(header.offsetHeight));
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Box
        component="header"
        ref={headerRef}
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
            <Box sx={{ display: 'none', [phoneHeader]: { display: 'flex' } }}>
              <MobileMenu headerHeight={headerHeight} />
            </Box>
            <Stack direction="row" alignItems="center" spacing="12px" sx={{ [phoneHeader]: { display: 'none' } }}>
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
                    <NavLabel>{item.label}</NavLabel>
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={navLinkSx}
                  >
                    <NavLabel>{item.label}</NavLabel>
                  </Link>
                )
              )}
              <PillButton
                href={links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ml: '28px !important',
                  fontSize: 16,
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

      <Box component="footer" id="contact" sx={{ bgcolor: '#1d1d1d' }}>
        <PageContainer sx={{ py: '60px' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-start' }}
            spacing={{ xs: 5, md: 4 }}
          >
            <Box sx={{ maxWidth: 665 }}>
              <Typography variant="h3" component="h2" sx={{ fontSize: { xs: 36, sm: 48, md: 48, lg: 48 }, lineHeight: 'normal' }}>
                Let’s get to know
                <br />
                each other! 👋
              </Typography>
              <Typography sx={{ mt: 3, fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, lineHeight: 'normal', color: colors.bodyStrong }}>
                Feel free to drop me a message anytime
                <br />I am ready to connect with you!
              </Typography>
            </Box>
            <Stack direction="row" spacing={6} sx={{ pt: { md: '28px' } }}>
              {footerColumns.map((column) => (
                <Stack key={column.heading} spacing={3} sx={{ minWidth: { xs: 120, md: column.heading === 'DESIGN' ? 135 : 82 } }}>
                  <Typography sx={{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, lineHeight: '22px', color: colors.bodyStrong }}>
                    {column.heading}
                  </Typography>
                  {column.items.map((item) =>
                    item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        underline="none"
                        sx={footerLinkSx}
                      >
                        <NavLabel>{item.label}</NavLabel>
                      </Link>
                    ) : (
                      <Box key={item.label} sx={{ fontSize: { xs: 16, sm: 16, md: 16, lg: 16 }, lineHeight: '22px', fontWeight: 600 }}>
                        {item.label}
                      </Box>
                    )
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </PageContainer>
      </Box>
    </Box>
  );
};

export default Layout;
