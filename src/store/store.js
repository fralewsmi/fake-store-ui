import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import editReducer from "../features/edit/editSlice";
import filterReducer from "../features/filter/filterSlice";
import { productsApi } from "../services/products/products";

export const store = configureStore({
  reducer: {
    edit: editReducer,
    filter: filterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
