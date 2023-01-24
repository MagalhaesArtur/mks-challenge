import { configureStore } from "@reduxjs/toolkit";
import { isSidebarOpenState } from "./features/isSidebarOpen/sideBar-slice";
import { totalItemsCounter } from "./features/itemsOnSupermarketCart/counter-slice";
import { allProductsInCart } from "./features/itemsOnSupermarketCart/products-slice";
import { allProducts } from "./features/products/products-slice";

export const store = configureStore({
  reducer: {
    totalItemsCounter,
    allProducts,
    isSidebarOpenState,
    allProductsInCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
