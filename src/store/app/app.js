import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    size: "xl",
    mobile: false,
  },
  reducers: {
    SET_SIZE: (state, action) => {
      state.size = action.payload;
    },
    SET_MOBILE: (state, action) => {
      state.mobile = action.payload;
    },
  },
});
export const { SET_SIZE, SET_MOBILE } = appSlice.actions;
export default appSlice.reducer;
