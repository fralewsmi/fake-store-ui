import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  description: null,
  image: null,
  price: null,
  title: null,
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateProduct: (state, action) => {
      state.category = action.payload.category;
      state.description = action.payload.description;
      state.image = action.payload.image;
      state.price = action.payload.price;
      state.title = action.payload.title;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const {
  reset,
  updateCategory,
  updateDescription,
  updateImage,
  updatePrice,
  updateProduct,
  updateTitle,
} = editSlice.actions;

export default editSlice.reducer;
