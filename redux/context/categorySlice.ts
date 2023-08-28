import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoryInterface = {
   name:string 
}

type CategoryState = {
  categories: CategoryInterface[];
};

const initialState = {
  categories: [],
} as CategoryState;

export const category = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: () => initialState,
    setCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setCategories,
  reset,
} = category.actions;

export default category.reducer;
