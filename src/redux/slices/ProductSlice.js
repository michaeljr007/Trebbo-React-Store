import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice(
  {
    name: "Products",
    initialState: [],
    reducers: {
      addProduct: (state, action) => {
        state.push(action.payload);
      },
    },
  },
  {
    name: "Profile",
    initialState: [],
    reducers: {
      addProfile: (state, action) => {
        state.push(action.payload);
      },
    },
  },
  {
    name: "Search",
    initialState: [],
    reducers: {
      addSearchQuery: (state, action) => {
        state.push(action.payload);
      },
    },
  }
);

export const { addProduct, addProfile, addSearchQuery } = ProductSlice.actions;
export default ProductSlice.reducer;
