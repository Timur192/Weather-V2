import { createSlice } from "@reduxjs/toolkit";
import i18n from "@/i18n";

interface LangsState {
  langs: string;
}

const initialState: LangsState = {
  langs: localStorage.getItem("Langs") || "en",
};

const langsSlice = createSlice({
  name: "langs",
  initialState,
  reducers: {
    toggleLangs(state) {
      const langs = localStorage.getItem("Langs");
      state.langs = langs === 'en' ? 'ru': 'en';
      localStorage.setItem("Langs", "en");
      i18n.changeLanguage(state.langs);
    },
  },
});

export const { toggleLangs } = langsSlice.actions;
export default langsSlice.reducer;
