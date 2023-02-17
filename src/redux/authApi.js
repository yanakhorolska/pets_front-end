import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    logInUser: builder.mutation({
      query: user => ({
        url: `/auth/login`,
        method: 'POST',
        body: user,
      }),
    }),
    getUser: builder.query({
      query: query => `/users/current${query}`,
    }),
  }),
});

export const { useLogInUserMutation, useGetUserQuery } = authApi;
