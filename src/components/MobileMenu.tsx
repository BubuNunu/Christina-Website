import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, ButtonBase, Drawer, Link, Stack, Typography } from '@mui/material';
import PillButton from './PillButton';
import { projects } from '@/data/projects';
import { links } from '@/data/links';
import { colors } from '@/theme';

// Phone header: a menu button that opens a full-screen panel with every header item.
// Current page is purple and bold, like the desktop header.
const itemSx = {
  display: 'block',
  py: 1.25,
  fontSize: 20,
  lineHeight: '28px',
  fontWeight: 600,
  color: '#ffffff',
  textDecoration: 'none',
  '&[aria-current="page"], &:hover, &:focus-visible': { color: colors.accent, fontWeight: 700 },
};

const projectSx = {
  ...itemSx,
  py: 1,
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 500,
  color: colors.body,
};

const MenuIcon = ({ open }: { open: boolean }) => (
  <Box component="svg" viewBox="0 0 24 24" aria-hidden sx={{ width: 24, height: 24 }}>
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    )}
  </Box>
);

const MobileMenu = ({ headerHeight }: { headerHeight: number }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close whenever the page changes (including the browser back button).
  useEffect(() => setOpen(false), [pathname]);

  const current = (to: string) => (pathname === to ? 'page' : undefined);

  return (
    <>
      <ButtonBase
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        sx={{
          width: 44,
          height: 44,
          mr: -1,
          borderRadius: '12px',
          color: '#ffffff',
          '&:focus-visible': { outline: `2px solid ${colors.accent}` },
        }}
      >
        <MenuIcon open={open} />
      </ButtonBase>
      <Drawer
        id="mobile-menu"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        // Sit under the sticky header so the logo and close button stay visible.
        sx={{ zIndex: 9 }}
        slotProps={{ backdrop: { sx: { top: headerHeight, bgcolor: 'rgba(0, 0, 0, 0.6)' } } }}
        PaperProps={{
          sx: {
            top: headerHeight,
            maxHeight: `calc(100dvh - ${headerHeight}px)`,
            bgcolor: '#0d0d0d',
            backgroundImage: 'none',
            borderBottom: `1px solid ${colors.divider}`,
            borderRadius: '0 0 24px 24px',
          },
        }}
      >
        <Box component="nav" aria-label="Main" sx={{ px: 2, pt: 2, pb: 'calc(24px + env(safe-area-inset-bottom))' }}>
          <Typography sx={{ fontSize: 13, letterSpacing: '0.08em', color: colors.muted, pb: 0.5 }}>WORK</Typography>
          <Box sx={{ pl: 1.5, borderLeft: `1px solid ${colors.divider}`, mb: 1.5 }}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                component={RouterLink}
                to={`/projects/${project.slug}`}
                aria-current={current(`/projects/${project.slug}`)}
                sx={projectSx}
              >
                {project.title}
              </Link>
            ))}
          </Box>
          <Link component={RouterLink} to="/vibe-coding" aria-current={current('/vibe-coding')} sx={itemSx}>
            Play
          </Link>
          <Link component={RouterLink} to="/about" aria-current={current('/about')} sx={itemSx}>
            About
          </Link>
          <Link href={links.resume} target="_blank" rel="noopener noreferrer" sx={itemSx}>
            Resume
          </Link>
          <Stack direction="row" sx={{ mt: 2 }}>
            <PillButton href={links.linkedIn} target="_blank" rel="noopener noreferrer" sx={{ width: '100%' }}>
              Say Hello
            </PillButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
