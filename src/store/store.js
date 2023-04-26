import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import addReducer from "../features/add/addSlice";
import editReducer from "../features/edit/editSlice";
import filterReducer from "../features/filter/filterSlice";
import { productsApi } from "../services/products/products";

export const store = configureStore({
  reducer: {
    add: addReducer,
    edit: editReducer,
    filter: filterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
