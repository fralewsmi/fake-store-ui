import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  category: null,
  limit: 5,
  sort: "asc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortAscending: (state) => {
      state.sort = "asc";
    },
    sortDescending: (state) => {
      state.sort = "desc";
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const {
  sortAscending,
  sortDescending,
  updateCategories,
  updateCategory,
  updateLimit,
} = filterSlice.actions;

export default filterSlice.reducer;
