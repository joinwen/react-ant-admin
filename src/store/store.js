import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/app";
import userReducer from "./user/user";
import menuReducer from "./menu/menu";
import routerReducer from "./router/router";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    menu: menuReducer,
    router: routerReducer
  }
})
