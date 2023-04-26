import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  description: null,
  image: null,
  price: null,
  title: null,
};

export const addSlice = createSlice({
  name: "add",
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
  updateTitle,
} = addSlice.actions;

export default addSlice.reducer;
