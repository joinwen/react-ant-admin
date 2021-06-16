import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    size: "xl",
    mobile: false,
    collapsed: false,
    headerFixed: false, // 固定顶部
    sideFixed: false, // 固定侧边栏
    navDirection: 1, // 1. 侧边导航 2. 水平导航
    globalStyle: 2, // 1. 亮色模式 2. 暗色模式
    visualMode: false, // false: 白天 true: 夜间
    color: "#fff", // 主题色
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
    SET_NAV_DIRECTION: (state, action) => {
      state.navDirection = action.payload;
    },
    SET_GLOBAL_STYLE: (state, action) => {
      state.globalStyle = action.payload;
    },
    SET_VISUAL_MODE: (state, action) => {
      state.visualMode = action.payload;
    },
    SET_COLOR: (state, action) => {
      state.color = action.payload;
    },
  },
});
export const {
  SET_SIZE,
  SET_MOBILE,
  SET_COLLAPSED,
  SET_HEADER_FIXED,
  SET_SIDE_FIXED,
  SET_VISUAL_MODE,
  SET_COLOR,
  SET_NAV_DIRECTION,
  SET_GLOBAL_STYLE
} = appSlice.actions;
export default appSlice.reducer;
