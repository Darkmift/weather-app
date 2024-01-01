// a slice to handle city data
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICityLookup } from '../../types/city';
import { getCities, getCurrentWeather, getWeeklyForecast } from '../thunks';
import { IForecast } from '../../types/forecast';
import { ICurrentWeather } from '../../types/currentWeather';

const UNDEFINED_STATE_ERROR = 'undefined state fetch error';

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

// create the slice
export const weatherSlice = createSlice({
  name: 'city',
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
    setMetricOrImperial: (state) => {
      state.isMetricOrImperial = !state.isMetricOrImperial;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.error = action.error.message || UNDEFINED_STATE_ERROR;
        state.loading = false;
      })
      .addCase(getWeeklyForecast.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeeklyForecast.fulfilled, (state, action) => {
        state.fiveDayForecast = action.payload;
        state.loading = false;
      })
      .addCase(getWeeklyForecast.rejected, (state, action) => {
        state.error = action.error.message || UNDEFINED_STATE_ERROR;
        state.loading = false;
      })
      .addCase(getCurrentWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = action.payload;
        state.loading = false;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.error = action.error.message || UNDEFINED_STATE_ERROR;
        state.loading = false;
      });
  },
});

export const { setCity, setMetricOrImperial, toggleFavoriteCity } = weatherSlice.actions;
