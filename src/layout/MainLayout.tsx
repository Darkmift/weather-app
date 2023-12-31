import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Container } from '@mui/material';

const MainLayout = () => {
  return (
    <Container disableGutters>
      <ResponsiveAppBar />
      <Box sx={{ padding: 4, paddingTop: 1 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default MainLayout;
