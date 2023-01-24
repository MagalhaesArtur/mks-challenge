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

interface InitialState {
  products: Array<any>;
}

const initialState: InitialState = {
  products: [],
};

export const productsInCartSlice = createSlice({
  name: "productsInCart",
  initialState,
  reducers: {
    setProductOnCart: (
      state: InitialState,
      action: PayloadAction<ProductSlice>
    ) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProductOnCart } = productsInCartSlice.actions;
export const allProductsInCart = productsInCartSlice.reducer;
