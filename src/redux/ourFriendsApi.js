import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ourFriendsApi = createApi({
  reducerPath: 'friends',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
  }),

  endpoints: builder => ({
    getFriends: builder.query({
      query: () => `/friends`,
    }),
  }),
});

export const { useGetFriendsQuery } = ourFriendsApi;
