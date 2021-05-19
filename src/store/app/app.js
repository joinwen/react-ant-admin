import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    size: "xl",
    mobile: false,
    collapsed: false,
    headerFixed: false,
    sideFixed: true,
  },
  reducers: {
    SET_SIZE: (state, action) => {
      state.size = action.payload;
      console.log(state.size);
      state.mobile = state.size === "xs";
    },
    SET_MOBILE: (state, action) => {
      state.mobile = action.payload;
    },
    SET_COLLAPSED: (state, action) => {
      state.collapsed = action.payload;
    },
    SET_HEADER_FIXED: (state, action) => {
      state.headerFixed = action.payload;
    },
    SET_SIDE_FIXED: (state, action) => {
      state.sideFixed = action.payload;
    },
  },
});
export const { SET_SIZE, SET_MOBILE, SET_COLLAPSED, SET_HEADER_FIXED, SET_SIDE_FIXED } = appSlice.actions;
export default appSlice.reducer;
