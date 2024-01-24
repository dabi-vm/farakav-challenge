import { User } from "@farakav-challenge/lib/rtk-query";
import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {} as User | undefined,
  reducers: {
    setUser(_, action) {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = mainSlice.actions;

export default mainSlice.reducer;
