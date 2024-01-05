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
import { setCity, toggleFavoriteCity } from '../store/slices/weather';
import { ICityLookup } from '../types/city';
import { SyntheticEvent, useEffect, useState } from 'react';
import { DEFAULT_CITY_NAME } from '../config';
import { generateIconLink } from '../utils/generateIconLink';
// icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ICurrentWeather } from '../types/currentWeather';
import { IForecast } from '../types/forecast';
import {
  useFetchCitiesQuery,
  useFetchCurrentWeatherQuery,
  useFetchWeeklyForecastQuery,
} from '../http/api';

function ToggleFavorite({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean;
  toggleFavorite: () => void;
}) {
  return (
    <Button
      variant="contained"
      onClick={toggleFavorite}
      sx={{ maxHeight: '40px' }}
      color={isFavorite ? 'secondary' : 'primary'}
      startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    >
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </Button>
  );
}

function TemperatureDisplay({ unit, averageTemp }: { unit: string; averageTemp: number }) {
  return (
    <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
      {averageTemp.toFixed(0)}
      <sup style={{ marginLeft: '2px', fontSize: '18px', marginBottom: '2px' }}>°{unit}</sup>
    </Typography>
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
          <TemperatureDisplay
            averageTemp={
              currentWeather.Temperature?.[isMetricOrImperial ? 'Metric' : 'Imperial']?.Value
            }
            unit={currentWeather.Temperature?.[isMetricOrImperial ? 'Metric' : 'Imperial']?.Unit}
          />
        </Box>
      </Box>
    </Box>
  );
}

function Forecast({ forecast }: { forecast: IForecast }) {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
      {forecast.DailyForecasts.map((day, key) => {
        const averageTemp = (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) / 2;
        const weekDay = new Date(day.Date).toLocaleDateString('en-US', { weekday: 'long' });
        return (
          <Card
            key={key}
            variant="outlined"
            sx={{ backgroundColor: isDarkMode ? '#476373' : 'lightblue' }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5">{weekDay}</Typography>
              <TemperatureDisplay averageTemp={averageTemp} unit={day.Temperature.Maximum.Unit} />
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
  const selectedCity = useAppSelector((state) => state.weather.selectedCity);
  const isMetricOrImperial = useAppSelector((state) => state.weather.isMetricOrImperial);
  const favoriteCities = useAppSelector((state) => state.weather.favoriteCities);

  const selectedCityKey = selectedCity?.Key || '';
  const [searchText, setSearchText] = useState(selectedCity?.LocalizedName || DEFAULT_CITY_NAME);

  const {
    data: cities,
    // isLoading: isCitiesLoading,
    // isError: isCitiesError,
    refetch: refetchCities,
  } = useFetchCitiesQuery(searchText, { skip: searchText === '' });

  const {
    data: currentWeather,
    // isLoading: isCurrentWeatherLoading,
    // isError: isCurrentWeatherError,
    refetch: refetchCurrentWeather,
  } = useFetchCurrentWeatherQuery(selectedCityKey);

  const {
    data: fiveDayForecast,
    // isLoading: isForecastLoading,
    // isError: isForecastError,
    refetch: refetchForecast,
  } = useFetchWeeklyForecastQuery({
    locationKey: selectedCityKey,
    isMetric: isMetricOrImperial,
  });

  const isFavoriteCity = favoriteCities.some((city) => city.Key === selectedCity?.Key);

  // Load default city data on app load
  useEffect(() => {
    refetchCities();
  }, [refetchCities]);

  // Refetch weather and forecast when city or unit changes
  useEffect(() => {
    if (!selectedCity && cities?.length) {
      cities?.length && dispatch(setCity(cities?.[0]));
    }
    if (selectedCity?.Key) {
      refetchCurrentWeather();
      refetchForecast();
    }
  }, [cities, selectedCity, isMetricOrImperial, refetchCurrentWeather, refetchForecast]);

  const handleInputChange = debounce((_: unknown, cityStr: string) => {
    console.log(`handleInputChange:`, { cityStr });
    const isEnglish = /^[A-Za-z ]+$/;
    if (!isEnglish.test(cityStr)) {
      console.log('Error - Only English letters allowed!');
      // notifyService.error('Please use only English characters');
      return;
    }
    setSearchText(cityStr);
    if (cityStr?.length) {
      refetchCities();
    }
  }, 500);

  const handleCitySelect = (_: SyntheticEvent<Element, Event>, value: ICityLookup | null) => {
    if (value) {
      dispatch(setCity(value));
    }
  };

  const handleToggleFavorite = () => {
    if (selectedCity) {
      dispatch(toggleFavoriteCity(selectedCity));
    }
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
          <CardContent
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <CurrentWeather
              city={selectedCity}
              isMetricOrImperial={isMetricOrImperial}
              currentWeather={currentWeather[0]}
            />
            <ToggleFavorite isFavorite={isFavoriteCity} toggleFavorite={handleToggleFavorite} />
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
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', marginBottom: 5, marginTop: 5 }}
          color="text.secondary"
        >
          City data loading...
        </Typography>
      )}
    </Container>
  );
}

export default Home;
