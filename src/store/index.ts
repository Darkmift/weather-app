import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './slices/theme';
import { weatherSlice } from './slices/weather';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
