import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addProduct, removeItem } = ProductSlice.actions;
export default ProductSlice.reducer;
