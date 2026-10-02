import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Colors and type from the Figma "website 页面" page.
export const colors = {
  background: '#000000',
  text: '#ffffff',
  body: 'rgba(255, 255, 255, 0.8)',
  bodyStrong: 'rgba(255, 255, 255, 0.9)',
  muted: 'rgba(255, 255, 255, 0.5)',
  subtle: 'rgba(166, 166, 166, 0.9)',
  statLabel: '#a7a7a7',
  accent: '#aca0f5',
  chip: '#343434',
  divider: 'rgba(255, 255, 255, 0.2)',
};

// Page content is 1280px wide inside an 80px gutter on the 1440px Figma frame.
export const contentMaxWidth = 1280;

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.background,
      paper: '#111111',
    },
    primary: {
      main: colors.accent,
    },
    text: {
      primary: colors.text,
      secondary: colors.body,
    },
    divider: colors.divider,
  },
  typography: {
    fontFamily: '"Manrope Variable", "Manrope", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: 88, fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: 64, fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: 48, fontWeight: 700, lineHeight: 1.25 },
    h4: { fontSize: 32, fontWeight: 600, lineHeight: 1.3 },
    h5: { fontSize: 24, fontWeight: 600, lineHeight: 1.35 },
    body1: { fontSize: 18, lineHeight: 28 / 18 },
    body2: { fontSize: 16, lineHeight: 1.4 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
});

theme = responsiveFontSizes(theme, { factor: 2.5 });

export default theme;
