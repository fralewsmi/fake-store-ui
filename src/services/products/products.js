import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, limit, sort }) => {
        return category
          ? `/category/${category}?limit=${limit}&sort=${sort}`
          : `?limit=${limit}&sort=${sort}`;
      },
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = productsApi;
