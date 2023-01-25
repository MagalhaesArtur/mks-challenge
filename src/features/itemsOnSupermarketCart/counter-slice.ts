import { createSlice } from "@reduxjs/toolkit";

export interface CounterSlice {
  value: number;
}

const initialState = {
  value: Number(localStorage.getItem("counter")) || 0,
};

export const counterSlice = createSlice({
  name: "counterTotalItems",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      if (localStorage.getItem("counter")) {
        const value: any = localStorage.getItem("counter");
        state.value = Number(value) + 1;
      } else {
        state.value += 1;
      }
      localStorage.setItem("counter", JSON.stringify(state.value));
    },
    decrementCounter: (state) => {
      if (localStorage.getItem("counter")) {
        const value: any = localStorage.getItem("counter");
        state.value = Number(value) - 1;
      } else {
        state.value -= 1;
      }
      localStorage.setItem("counter", JSON.stringify(state.value));
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export const totalItemsCounter = counterSlice.reducer;
