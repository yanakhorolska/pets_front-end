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
    registerUser: builder.mutation({
      query: user => ({
        url: `/users/register`,
        method: 'POST',
        body: user,
      }),
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
    }),
    getUser: builder.query({
      query: query => `/users/current${query}`,
    }),
  }),
});

export const {
  useLogInUserMutation,
  useGetUserQuery,
  useRegisterUserMutation,
} = authApi;
