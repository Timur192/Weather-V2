import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherApi } from './services/weather/weather'
import { newsApi } from './services/news/news'
import inputReducer from './Slices/inputSlice'
import themeReducer from './Slices/themeSlice'
import langsReducer from './Slices/langsSlice'

export const store = configureStore({
    reducer: {
        input: inputReducer,
        theme: themeReducer,
        langs: langsReducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, newsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch