import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const isSidebarOpen = createSlice({
  name: "changeSidebarState",
  initialState,
  reducers: {
    change: (state) => {
      state.open = !state.open;
    },
    changeToFalse: (state) => {
      state.open = false;
    },
  },
});

export const { change, changeToFalse } = isSidebarOpen.actions;
export const isSidebarOpenState = isSidebarOpen.reducer;
