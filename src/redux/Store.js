import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import ProfileSlice from "./slices/ProfileSlice";

export const Store = configureStore({
  reducer: {
    Products: ProductReducer,
    Profile: ProfileSlice,
  },
});
