import { User } from "@farakav-challenge/lib/rtk-query";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Partial<User> = {
  id: undefined,
  name: undefined,
  address: undefined,
  profile: undefined,
};
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser(_, action) {
      return action.payload;
    },
    clearState() {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearState } = mainSlice.actions;

export default mainSlice.reducer;
