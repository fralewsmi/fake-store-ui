import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    update: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { update } = productsSlice.actions;

export default productsSlice.reducer;
