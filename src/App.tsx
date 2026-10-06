import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import About from './components/pages/About';
import Play from './components/pages/VibeCoding';
import NotFound from './components/pages/NotFound';
import PasswordGate from './components/PasswordGate';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PasswordGate>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="projects/:slug" element={<Project />} />
              <Route path="about" element={<About />} />
              <Route path="play" element={<Play />} />
              <Route path="vibe-coding" element={<Navigate to="/play" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </PasswordGate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
