import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import debounce from '../utils/debounce';
import { setCity } from '../store/slices/weather';
import { ICityLookup } from '../types/city';
import { getCities, getCurrentWeather, getWeeklyForecast } from '../store/thunks';
import { useEffect } from 'react';
import { DEFAULT_CITY_NAME } from '../config';
import { generateIconLink } from '../utils/generateIconLink';
// icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ICurrentWeather } from '../types/currentWeather';
import { IForecast } from '../types/forecast';

function ToggleFavorite({ isFavorite }: { isFavorite: boolean }) {
  return (
    <Button variant="contained" startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
      Toggle Favorite
    </Button>
  );
}

function CurrentWeather({
  city,
  isMetricOrImperial,
  currentWeather,
}: {
  city: ICityLookup;
  isMetricOrImperial: boolean;
  currentWeather: ICurrentWeather;
}) {
  const weatherIconUrl = generateIconLink(currentWeather.WeatherIcon);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        style={{ width: '10vw', height: 'auto' }}
        src={weatherIconUrl}
        alt={currentWeather.WeatherText}
      />
      <Box>
        <Box>{city?.LocalizedName}</Box>
        <Box>
          {currentWeather.WeatherText}&nbsp;
          {currentWeather.Temperature?.[isMetricOrImperial ? 'Metric' : 'Imperial']?.Value.toFixed(
            0
          )}
          °
        </Box>
      </Box>
    </Box>
  );
}

function Forecast({ forecast }: { forecast: IForecast }) {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
      {forecast.DailyForecasts.map((day) => {
        const averageTemp = (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2;
        const weekDay = new Date(day.Date).toLocaleDateString('en-US', { weekday: 'long' });
        return (
          <Card variant="outlined" sx={{ backgroundColor: isDarkMode ? '#476373' : 'lightblue' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">{weekDay}</Typography>
              <Typography variant="h5">
                {averageTemp.toFixed(0)}&nbsp;
                {day.Temperature.Maximum.Unit}°
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt={day.Day.IconPhrase}
              height="100"
              image={generateIconLink(day.Day.Icon)}
            />
          </Card>
        );
      })}
    </Box>
  );
}

function Home() {
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state) => state.weather.searchResults);

  const selectedCity = useAppSelector((state) => state.weather.selectedCity);
  const currentWeather = useAppSelector((state) => state.weather.currentWeather);
  const isMetricOrImperial = useAppSelector((state) => state.weather.isMetricOrImperial);
  const fiveDayForecast = useAppSelector((state) => state.weather.fiveDayForecast);

  const getDefaultCity = () => dispatch(getCities(DEFAULT_CITY_NAME));

  useEffect(() => {
    getDefaultCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCity?.Key) {
      dispatch(getCurrentWeather(selectedCity.Key));
      dispatch(getWeeklyForecast(selectedCity.Key));
    } else {
      dispatch(setCity(cities[0]));
    }
  }, [selectedCity, dispatch, cities]);

  const handleInputChange = debounce((_: unknown, cityStr: string) => {
    console.log(`handleInputChange:`, { cityStr });
    const isEnglish = /^[A-Za-z ]+$/;
    if (!isEnglish.test(cityStr)) {
      console.log('Error - Only English letters allowed!');
      // notifyService.error('Please use only English characters');
      return;
    }
    if (cityStr?.length) {
      dispatch(getCities(cityStr));
    }
  }, 500);

  const handleCitySelect = (_: React.SyntheticEvent<Element, Event>, value: ICityLookup | null) => {
    value && dispatch(setCity(value));
    console.log(`The city you chose is ${value?.LocalizedName}`, value);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Autocomplete
        options={cities || []}
        getOptionLabel={(option) => option.LocalizedName}
        getOptionKey={(option) => option.Key}
        onInputChange={handleInputChange}
        onChange={handleCitySelect}
        renderInput={(params) => <TextField {...params} label="Choose a city" variant="outlined" />}
      />
      {selectedCity && currentWeather?.[0] ? (
        <Card sx={{ padding: 2 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CurrentWeather
              city={selectedCity}
              isMetricOrImperial={isMetricOrImperial}
              currentWeather={currentWeather[0]}
            />
            <ToggleFavorite isFavorite={false} />
          </CardContent>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', marginBottom: 5, marginTop: 5 }}
            color="text.secondary"
          >
            {currentWeather[0].WeatherText}
          </Typography>
          {fiveDayForecast ? (
            <Forecast forecast={fiveDayForecast} />
          ) : (
            <Box>Forecast loading...</Box>
          )}
        </Card>
      ) : (
        <Box>City data loading...</Box>
      )}
    </Container>
  );
}

export default Home;
