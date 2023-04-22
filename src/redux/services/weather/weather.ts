import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from './interface'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query<Root, {cityName: string, lang: string}>({
      query: ({cityName, lang}) => `forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=${lang}`,
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi