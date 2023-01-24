import { createSlice } from "@reduxjs/toolkit";

export interface CounterSlice {
  value: number;
}

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counterTotalItems",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const totalItemsCounter = counterSlice.reducer;
