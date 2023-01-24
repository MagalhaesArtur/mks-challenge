import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductSlice {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

const initialState: any = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onLoad: (state, action: PayloadAction<ProductSlice[]>) => {
      state.products = action.payload;
    },
  },
});

export const { onLoad } = productsSlice.actions;
export const allProducts = productsSlice.reducer;
