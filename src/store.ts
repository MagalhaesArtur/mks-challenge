import { configureStore } from "@reduxjs/toolkit";
import { totalItemsCounter } from "./features/itemsOnSupermarketCart/counter-slice";
import { allProducts } from "./features/products/products-slice";

export const store = configureStore({
  reducer: {
    totalItemsCounter,
    allProducts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
