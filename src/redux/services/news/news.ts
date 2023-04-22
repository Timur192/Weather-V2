import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from './interface'

const BASE_URL = 'https://newsapi.org/v2/'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<Root, {size: number }>({
      query: ({ size }) => ({
        url: `top-headlines?country=us&category=business&apiKey=${API_KEY}&pageSize=${size}`,
      })
    }),
  }),
})

export const { useGetNewsQuery } = newsApi