import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";
import { productsApi } from "../services/products/products";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
