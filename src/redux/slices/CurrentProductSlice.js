import { createSlice } from "@reduxjs/toolkit";

const CurrentProductSlice = createSlice({
  name: "CurrentProduct",
  initialState: {
    currentProduct: [],
  },
  reducers: {
    addCurrentProduct: (state, action) => {
      state.currentProduct.push(action.payload);
    },
    removeCurrentProduct: (state) => {
      state.currentProduct = [];
    },
  },
});

export const { addCurrentProduct, removeCurrentProduct } =
  CurrentProductSlice.actions;
export default CurrentProductSlice.reducer;
