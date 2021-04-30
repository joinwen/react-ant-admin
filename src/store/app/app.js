import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    size: "xl",
    mobile: false,
    collapsed: false
  },
  reducers: {
    SET_SIZE: (state, action) => {
      state.size = action.payload;
    },
    SET_MOBILE: (state, action) => {
      state.mobile = action.payload;
    },
    SET_COLLAPSED: (state, action) => {
      state.collapsed = action.payload;
    }
  },
});
export const { SET_SIZE, SET_MOBILE, SET_COLLAPSED } = appSlice.actions;
export default appSlice.reducer;
