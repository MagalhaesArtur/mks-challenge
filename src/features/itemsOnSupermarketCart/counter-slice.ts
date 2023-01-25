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
    incrementCounter: (state) => {
      state.value += 1;
    },
    decrementCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export const totalItemsCounter = counterSlice.reducer;
