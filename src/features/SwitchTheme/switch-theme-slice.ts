import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isDarkMode: false,
};

export const productsSlice = createSlice({
  name: "isDarkMode",
  initialState,
  reducers: {
    switchMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { switchMode } = productsSlice.actions;
export const SwitchTheme = productsSlice.reducer;
