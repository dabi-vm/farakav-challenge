import { createSlice } from "@reduxjs/toolkit";

// creating action-reducer slice
export const mainSlice = createSlice({
  name: "main",
  initialState: {},
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = mainSlice.actions;

export default mainSlice.reducer;
