import { createSlice } from "@reduxjs/toolkit";

export const getMenus = () => (dispatch, getState) => {
  const state = getState();
  dispatch(SET_MENUS(state.user.userInfo.menus));
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
  },
  reducers: {
    SET_MENUS: (state, action) => {
      state.menus = action.payload;
    },
  },
});
export default menuSlice.reducer;
export const { SET_MENUS } = menuSlice.actions;
