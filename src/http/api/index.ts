import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL } from '../../config';
import { ICityLookup } from '../../types/city';
import { IForecast } from '../../types/forecast';
import { ICurrentWeather } from '../../types/currentWeather';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCities: builder.query<ICityLookup[], string>({
      query: (searchStr) => ({
        url: `/locations/v1/cities/autocomplete`,
        params: { apikey: API_KEY, q: searchStr },
      }),
    }),
    fetchWeeklyForecast: builder.query<IForecast, { locationKey: string; isMetric: boolean }>({
      query: ({ locationKey = 'null', isMetric }) => ({
        url: `/forecasts/v1/daily/5day/${locationKey}`,
        params: { apikey: API_KEY, metric: isMetric },
      }),
    }),
    fetchCurrentWeather: builder.query<ICurrentWeather[], string>({
      query: (locationKey = 'null') => ({
        url: `/currentconditions/v1/${locationKey}`,
        params: { apikey: API_KEY, details: true },
      }),
    }),
  }),
});

export const { useFetchCitiesQuery, useFetchWeeklyForecastQuery, useFetchCurrentWeatherQuery } =
  weatherApi;
