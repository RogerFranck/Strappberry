import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './context/categorySlice'
import productReducer from './context/productSlice'
import shopListReducer from './context/shopSlice'
import authReducer from './context/authSlice'

export const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    shopListReducer,
    authReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
