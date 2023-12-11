import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import dataSlice from "./slices/dataSlice";
import localSlice from "./slices/localSlice";

export default configureStore({
  reducer: {
    authSlice,
    dataSlice,
    localSlice,
  },
});
