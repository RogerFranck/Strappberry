import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userSquema = {
  id: number,
  name: string,
  email: string,
  email_verified_at?: any,
  created_at: string,
  updated_at: string
}

interface loginAPI {
  user: userSquema;
  accessToken: string;
  token_type: string
}

interface userAuth  {
  user: null|userSquema;
  accessToken: string
};

const initialState = {
  user: null,
} as userAuth;

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<loginAPI>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
    },
  },
});

export const {
  setUser,
  reset,
} = authSlice.actions;

export default authSlice.reducer;
