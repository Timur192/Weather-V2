import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from './interface'

const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<Root, {size: number }>({
      query: ({ size }) => ({
        url: `search?keywords=technology&language=en&page_size=${size}&apiKey=${API_KEY}`,
      })
    }),
  }),
})

export const { useGetNewsQuery } = newsApi