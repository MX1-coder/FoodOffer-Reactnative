// store.js
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";
// import AuthSlice from "../"

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
