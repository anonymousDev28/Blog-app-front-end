import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/public' }),
  tagTypes:["blog"],
  endpoints: (builder) => ({
    getAllblog: builder.query({
      query: () => "blogs",
      providesTags:["course"]
    }),
    searchBlogByKey: builder.query({
        query: (key)=>`search?term=${key}`
    }),
    getBlogByIdAndSlug: builder.query({
      query: ({id, slug}) => 
                  `/blogs/${id}/${slug}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllblogQuery,
    useGetBlogByIdAndSlugQuery,
    useSearchBlogByKeyQuery,
    useLazySearchBlogByKeyQuery
     } = blogApi