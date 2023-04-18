import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public' }),
  tagTypes:["category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
        query: () => "categories"
    }),
    getTop5CategoryMostUsed: builder.query({
        query: () => `category/top5`
    }),
    getBlogUsedCategoryName: builder.query({
        query: (name) =>`category/${name}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllCategoryQuery,
    useGetBlogUsedCategoryNameQuery,
    useGetTop5CategoryMostUsedQuery
     } = categoryApi