import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const productDetailsApi = createApi({
  reducerPath: 'productDetailsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
  endpoints: builder => ({
    getProductDetails: builder.query({
      query: ({id}) => `products/${id}`,
    }),
  }),
});
export const {useGetProductDetailsQuery} = productDetailsApi;
