import { getInitialTheme } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = (() => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("theme") || "") as ThemeState;
})();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    chengTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { chengTheme } = themeSlice.actions;

export default themeSlice.reducer;
