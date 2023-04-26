import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (body) => ({
        method: "POST",
        body,
      }),
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getProduct: builder.query({
      query: (id) => `/${id}`,
    }),
    getProducts: builder.query({
      query: ({ category, limit, sort }) => {
        return category
          ? `/category/${category}?limit=${limit}&sort=${sort}`
          : `?limit=${limit}&sort=${sort}`;
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productsApi;
