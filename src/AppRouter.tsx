import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MainLayout from './layout/MainLayout';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { useAppSelector } from './store';

export const routeMap: Record<string, string> = {
  '/': 'Home',
  '/favorites': 'Favorites',
};

const SetTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = routeMap[location.pathname];
  }, [location]);

  return null; // This component does not render anything
};

const AppRouter = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SetTitle />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;
