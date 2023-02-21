import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticeByIdApi = createApi({
  reducerPath: 'Notice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
  }),

  endpoints: builder => ({
    getNoticeById: builder.query({
      query: id => `/notices/${id}`,
      transformResponse: response => response.data,
    }),
    providesTags: ['Notice'],
  }),
});

export const { useGetNoticeByIdQuery } = noticeByIdApi;
