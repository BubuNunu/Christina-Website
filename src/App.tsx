import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import About from './components/pages/About';
import VibeCoding from './components/pages/VibeCoding';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/:slug" element={<Project />} />
            <Route path="about" element={<About />} />
            <Route path="vibe-coding" element={<VibeCoding />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
