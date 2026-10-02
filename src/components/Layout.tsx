import { useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Vibe coding', to: '/vibe-coding' },
];

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="header" maxWidth="lg" sx={{ py: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Link component={RouterLink} to="/" underline="none" color="inherit">
            <Typography fontWeight={700}>RUI • SHI</Typography>
          </Link>
          <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 4 }}>
            {navLinks.map((item) => (
              <Link key={item.to} component={RouterLink} to={item.to} underline="hover" color="inherit">
                {item.label}
              </Link>
            ))}
            {/* Resume link is added once the file is available (step 3) */}
            <Button href="#contact" variant="contained" color="inherit" sx={{ color: 'black', borderRadius: 999 }}>
              Say Hello
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Container component="footer" id="contact" maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight={600}>
          Let&apos;s get to know each other!
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Contact links go here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Layout;
