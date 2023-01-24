import { configureStore } from "@reduxjs/toolkit";
import { totalItemsCounter } from "./features/itemsOnSupermarketCart/counter-slice";

export const store = configureStore({
  reducer: {
    totalItemsCounter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
