import { createAsyncThunk } from '@reduxjs/toolkit';
import httpsService from '../http';
import { ENV } from '../config';
import mockHttpService from '../tests/mock/mockHttpService';
import store from '.';

if (ENV === 'development') {
  console.log('🚀 ~ file: thunks.ts:6 ~ VITE_NODE_ENV:', ENV);
  httpsService.fetchCities = mockHttpService.fetchCities;
  httpsService.fetchCurrentWeather = mockHttpService.fetchCurrentWeather;
  httpsService.fetchWeeklyForecast = mockHttpService.fetchWeeklyForecast;
}

const { fetchCities, fetchCurrentWeather, fetchWeeklyForecast } = httpsService;

export const getCities = createAsyncThunk('weather/getCities', async (searchStr: string) => {
  const cities = await fetchCities(searchStr);
  return cities;
});

export const getWeeklyForecast = createAsyncThunk(
  'weather/getWeeklyForecast',
  async (locationKey: string) => {
    const forecast = await fetchWeeklyForecast(
      locationKey,
      store.getState().weather.isMetricOrImperial
    );
    return forecast;
  }
);

export const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (locationKey: string) => {
    const currentWeather = await fetchCurrentWeather(locationKey);
    return currentWeather;
  }
);
