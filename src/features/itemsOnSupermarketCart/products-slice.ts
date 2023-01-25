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
  counter: number;
}

interface InitialState {
  products: Array<ProductSlice>;
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
      if (state.products.length != 0) {
        let inArray = false;
        for (const product of state.products) {
          if (product.id == action.payload.id) {
            inArray = true;
            product.counter += 1;
          }
        }
        !inArray ? state.products.push(action.payload) : null;
      } else {
        state.products.push(action.payload);
      }
    },
    increment: (state: InitialState, action: PayloadAction<ProductSlice>) => {
      for (const product of state.products) {
        if (product.id == action.payload.id) {
          product.counter += 1;
        }
      }
    },
    decrement: (state: InitialState, action: PayloadAction<ProductSlice>) => {
      for (const product of state.products) {
        if (product.id == action.payload.id) {
          product.counter -= 1;
        }
      }
    },
  },
});

export const { setProductOnCart, decrement, increment } =
  productsInCartSlice.actions;
export const allProductsInCart = productsInCartSlice.reducer;
