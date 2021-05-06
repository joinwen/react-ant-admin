import { createSlice } from "@reduxjs/toolkit";
import { constantRoutes } from "../../config/routerConfig";
import generateRoutes from "../../tools/generateRoutes";
export const getRoutes = () => (dispatch, getState) => {
  const state = getState(),
    routes = state.user.userInfo.routes;
  dispatch(SET_ADD_ROUTES((JSON.parse(JSON.stringify(routes)))));
};
const routerSlice = createSlice({
  name: "router",
  initialState: {
    routes: JSON.parse(JSON.stringify(constantRoutes)),
    addRoutes: [],
  },
  reducers: {
    SET_ADD_ROUTES: (state, action) => {
      state.addRoutes = action.payload;
      state.routes = state.routes.concat(state.addRoutes);
    },
  },
});
export default routerSlice.reducer;
export const { SET_ADD_ROUTES } = routerSlice.actions;
