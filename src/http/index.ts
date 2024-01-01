import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';
import { ICityLookup } from '../types/city';
import { IForecast } from '../types/forecast';
import { ICurrentWeather } from '../types/currentWeather';

const fetchCities = async (searchStr: string): Promise<ICityLookup[]> => {
  const response = await axios.get(`${BASE_URL}/locations/v1/cities/autocomplete`, {
    params: { apikey: API_KEY, q: searchStr },
  });
  return response.data;
};

const fetchWeeklyForecast = async (locationKey: string, isMetric: boolean): Promise<IForecast> => {
  const response = await axios.get(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}`, {
    params: { apikey: API_KEY, metric: isMetric },
  });
  return response.data;
};

const fetchCurrentWeather = async (locationKey: string): Promise<ICurrentWeather[]> => {
  const response = await axios.get(`${BASE_URL}/currentconditions/v1/${locationKey}`, {
    params: { apikey: API_KEY, details: true },
  });
  return response.data;
};

export default { fetchCities, fetchWeeklyForecast, fetchCurrentWeather };
