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

const generateInitialState = () => {
  const prodAux: any = localStorage.getItem("productsInCart");
  const products: Array<ProductSlice> = JSON.parse(prodAux);
  return products;
};

const initialState: InitialState = {
  products: generateInitialState() || [],
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
        !inArray
          ? state.products.push(action.payload) &&
            localStorage.setItem(
              "productsInCart",
              JSON.stringify(state.products)
            )
          : null;
      } else {
        state.products.push(action.payload);
        localStorage.setItem("productsInCart", JSON.stringify(state.products));
      }
    },
    increment: (state: InitialState, action: PayloadAction<ProductSlice>) => {
      for (const product of state.products) {
        if (product.id == action.payload.id) {
          product.counter += 1;
        }
      }
      localStorage.setItem("productsInCart", JSON.stringify(state.products));
    },
    decrement: (state: InitialState, action: PayloadAction<ProductSlice>) => {
      for (const product of state.products) {
        if (product.id == action.payload.id) {
          product.counter -= 1;
          if (product.counter == 0) {
            state.products.splice(state.products.indexOf(product), 1);
          }
        }
      }
      localStorage.setItem("productsInCart", JSON.stringify(state.products));
    },
  },
});

export const { setProductOnCart, decrement, increment } =
  productsInCartSlice.actions;
export const allProductsInCart = productsInCartSlice.reducer;
