import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isLightMode: boolean;
}

const initialState: ThemeState = {
  isLightMode: localStorage.getItem('isLightMode') === 'true' || !window?.matchMedia('(prefers-color-scheme: dark)').matches,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      const isLightMode = localStorage.getItem('isLightMode') === 'true';
      localStorage.setItem('isLightMode', String(!isLightMode));
      state.isLightMode = !isLightMode;
    }
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;