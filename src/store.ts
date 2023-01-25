import { configureStore } from "@reduxjs/toolkit";
import { totalItemsCounter } from "./features/itemsOnSupermarketCart/counter-slice";
import { allProductsInCart } from "./features/itemsOnSupermarketCart/products-slice";
import { allProducts } from "./features/products/products-slice";

export const store = configureStore({
  reducer: {
    totalItemsCounter,
    allProducts,
    allProductsInCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
