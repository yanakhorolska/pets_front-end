import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pets-back-end.vercel.app/api/news`,
  }),

  endpoints: builder => ({
    getNews: builder.query({
      query: ({ query, page }) => {
        if (query) {
          return `?query=${query}&page=${page}`;
        }
        return `?page=${page}`;
      },
      transformResponse: response => response,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
