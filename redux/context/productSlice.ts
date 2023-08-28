import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Productpayload = {
  id:number;
  name:string;
  description: string;
  img: string;
  category: string;
  price: number;
}

type ProductState = {
  products: Productpayload[];
};

const initialState = {
  products: [],
} as ProductState;

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: () => initialState,
    setProducts: (state, action: PayloadAction<Productpayload[]>) => {
      state.products = action.payload;
    },
    addProducts: (state, action: PayloadAction<Productpayload>) => {
      state.products = [...state.products, action.payload];
    },
    deleteProducts: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((x)=>x.id != action.payload);
    },
    updateProducts:(state, action: PayloadAction<Productpayload>) => {
      const updatedProduct = action.payload;
      state.products = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
  },
});

export const {
  setProducts,
  addProducts,
  deleteProducts,
  updateProducts,
  reset,
} = products.actions;

export default products.reducer;
