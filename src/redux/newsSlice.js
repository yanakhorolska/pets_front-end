import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
  }),
  endpoints: builder => ({
    getNews: builder.query({
      query: () =>
        `/everything?apiKey=48c5727fada347ffbc441598f50b3de6&pageSize=20&page=1&q=css`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
