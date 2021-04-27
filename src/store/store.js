import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/app";
import permissionReducer from "./permission/permission";
export const store = configureStore({
  reducer: {
    app: appReducer,
    permission: permissionReducer
  }
})
