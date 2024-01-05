// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
// src/mocks/handlers.ts
import { DefaultBodyType, http, HttpResponse, StrictRequest } from 'msw';
import { ENV } from '../../../config';
import citiesMockLookup from '../data/city';
import { forecastCelsius, forecastFahrenheit } from '../data/forecast';
import currentWeather from '../data/currentWeather';

const BASE_URL = 'http://dataservice.accuweather.com';

const getQueryParams = (request: StrictRequest<DefaultBodyType>) => {
  const url = new URL(request.url);
  const qparams = Object.fromEntries(url.searchParams.entries());
  return qparams;
};

export const handlers = [
  http.get(`${BASE_URL}/locations/v1/cities/autocomplete`, ({ request }) => {
    const qparams = getQueryParams(request);
    const q = qparams.q;

    console.log('🚀 ~ file: handlers.ts:21 ~ http.get ~ test:', { q, qparams });
    return HttpResponse.json(citiesMockLookup);
  }),

  http.get(`${BASE_URL}/forecasts/v1/daily/5day/`, ({ request }) => {
    // http.get(`${BASE_URL}/forecasts/v1/daily/5day/:locationKey`, ({ request }) => {
    const qparams = getQueryParams(request);
    console.log('🚀 ~ file: handlers.ts:21 ~ http.get ~ test:', qparams);
    return HttpResponse.json(qparams?.metric ? forecastCelsius : forecastFahrenheit);
  }),

  http.get(`${BASE_URL}/currentconditions/v1/`, ({ request }) => {
    // http.get(`${BASE_URL}/currentconditions/v1/:locationKey`, ({ request }) => {
    const qparams = getQueryParams(request);
    console.log('🚀 ~ file: handlers.ts:21 ~ http.get ~ test:', qparams);
    return HttpResponse.json(currentWeather);
  }),

  // ... other handlers
];

export const worker = setupWorker(...handlers);

export async function enableMocking() {
  if (ENV !== 'development') {
    return;
  }

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
