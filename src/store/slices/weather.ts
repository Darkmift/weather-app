// a slice to handle city data
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICityLookup } from '../../types/city';
import { IForecast } from '../../types/forecast';
import { ICurrentWeather } from '../../types/currentWeather';
import { weatherApi } from '../../http/api';

// define the initial state
const initialState: {
  searchResults: ICityLookup[];
  selectedCity: ICityLookup | null;
  loading: boolean;
  isMetricOrImperial: boolean;
  fiveDayForecast: IForecast | null;
  error?: string;
  currentWeather: ICurrentWeather[] | null;
  favoriteCities: ICityLookup[];
} = {
  searchResults: [],
  selectedCity: null,
  loading: false,
  isMetricOrImperial: true,
  fiveDayForecast: null,
  error: undefined,
  currentWeather: null,
  favoriteCities: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<ICityLookup>) {
      state.selectedCity = action.payload;
    },
    toggleFavoriteCity(state, action: PayloadAction<ICityLookup>) {
      const city = state.favoriteCities.find((c) => c.Key === action.payload.Key);
      if (city) {
        state.favoriteCities = state.favoriteCities.filter((c) => c.Key !== action.payload.Key);
      } else {
        state.favoriteCities.push(action.payload);
      }
    },
    setMetricOrImperial(state) {
      state.isMetricOrImperial = !state.isMetricOrImperial;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(weatherApi.endpoints.fetchCities.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(weatherApi.endpoints.fetchCities.matchFulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addMatcher(weatherApi.endpoints.fetchCities.matchRejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addMatcher(weatherApi.endpoints.fetchWeeklyForecast.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(weatherApi.endpoints.fetchWeeklyForecast.matchFulfilled, (state, action) => {
        state.fiveDayForecast = action.payload;
        state.loading = false;
      })
      .addMatcher(weatherApi.endpoints.fetchWeeklyForecast.matchRejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addMatcher(weatherApi.endpoints.fetchCurrentWeather.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(weatherApi.endpoints.fetchCurrentWeather.matchFulfilled, (state, action) => {
        state.currentWeather = action.payload;
        state.loading = false;
      })
      .addMatcher(weatherApi.endpoints.fetchCurrentWeather.matchRejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setCity, setMetricOrImperial, toggleFavoriteCity } = weatherSlice.actions;

export default weatherSlice;
