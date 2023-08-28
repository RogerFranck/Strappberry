import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductShopInterface = {
  id:number;
  name:string;
  description: string;
  img: string;
  category: string;
  price: number;
  cant: number;
}

type shopListtate = {
  shopList: ProductShopInterface[];
};

const initialState = {
  shopList: [],
} as shopListtate;

export const shopList = createSlice({
  name: "shopList",
  initialState,
  reducers: {
    reset: () => initialState,
    setShopList: (state, action: PayloadAction<ProductShopInterface[]>) => {
      state.shopList = action.payload;
    },
    addShopList: (state, action: PayloadAction<ProductShopInterface>) => {
      state.shopList = [...state.shopList, action.payload];
    },
    deleteShopList: (state, action: PayloadAction<number>) => {
      state.shopList = state.shopList.filter((x)=>x.id != action.payload);
    },
    updateShopList:(state, action: PayloadAction<ProductShopInterface>) => {
      const updatedProduct = action.payload;
      state.shopList = state.shopList.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
  },
});

export const {
  setShopList,
  addShopList,
  deleteShopList,
  updateShopList,
  reset,
} = shopList.actions;

export default shopList.reducer;
