import { createTheme } from '@mui/material/styles';

// Placeholder dark theme; exact colors and fonts come from Figma in step 2.
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#111111',
    },
    primary: {
      main: '#a78bfa',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
