import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
  value: string
}

const cityName = localStorage.getItem('cityName')

const initialState: InputState = {
  value: cityName? cityName: 'Toshkent',
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    InputSlice: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { InputSlice } = inputSlice.actions

export default inputSlice.reducer