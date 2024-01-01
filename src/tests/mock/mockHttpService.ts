import { ICityLookup } from '../../types/city';
import { ICurrentWeather } from '../../types/currentWeather';
import { IForecast } from '../../types/forecast';
import citiesMockLookup from './data/city';
import currentWeather from './data/currentWeather';
import { forecastCelsius, forecastFahrenheit } from './data/forecast';

const simulateNetworkDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const fetchCitiesMock = async (searchStr: string): Promise<ICityLookup[]> => {
  await simulateNetworkDelay();
  return citiesMockLookup.filter((city) =>
    city.LocalizedName.toLowerCase().includes(searchStr.toLowerCase())
  );
};

const fetchWeeklyForecastMock = async (
  locationKey: string,
  isMetric: boolean
): Promise<IForecast> => {
  console.log('🚀 ~ file: mockHttpService.ts:14 ~ fetchWeeklyForecastMock ~ locationKey:', {
    locationKey,
    isMetric,
  });
  await simulateNetworkDelay();
  return isMetric ? forecastCelsius : forecastFahrenheit;
};

const fetchCurrentWeatherMock = async (locationKey: string): Promise<ICurrentWeather[]> => {
  console.log(
    '🚀 ~ file: mockHttpService.ts:23 ~ fetchCurrentWeatherMock ~ locationKey:',
    locationKey
  );
  await simulateNetworkDelay();
  return currentWeather;
};

const mockHttpService = {
  fetchCities: fetchCitiesMock,
  fetchWeeklyForecast: fetchWeeklyForecastMock,
  fetchCurrentWeather: fetchCurrentWeatherMock,
};

export default mockHttpService;
