import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import ProfileSlice from "./slices/ProfileSlice";
import CurrentProductSlice from "./slices/CurrentProductSlice";

export const Store = configureStore({
  reducer: {
    Products: ProductReducer,
    Profile: ProfileSlice,
    CurrentProduct: CurrentProductSlice,
  },
});
