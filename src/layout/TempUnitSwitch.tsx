import { Box, Switch, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { setMetricOrImperial } from '../store/slices/weather';

const TempUnitSwitch = () => {
  const dispatch = useAppDispatch();
  const isMetricOrImperial = useAppSelector((state) => state.weather.isMetricOrImperial);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography>°C</Typography>
      <Switch value={isMetricOrImperial} onClick={() => dispatch(setMetricOrImperial())} color='success' />
      <Typography>°F</Typography>
    </Box>
  );
};

export default TempUnitSwitch;
