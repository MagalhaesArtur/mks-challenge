import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsSlice {
  products: [];
}

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onLoad: (state, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
  },
});

export const { onLoad } = productsSlice.actions;
export const totalItemsCounter = productsSlice.reducer;
