import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    getProductsList: builder.query({
      query: () => `products`,
    }),
  }),
});
export const {useGetProductsListQuery} = productsApi;
