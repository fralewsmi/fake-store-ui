import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
  },
});
