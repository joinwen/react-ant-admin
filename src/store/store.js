import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/app";
import userReducer from "./user/user";
export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  }
})
