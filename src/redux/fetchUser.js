import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    registrationUser: builder.mutation({
      query: payload => ({
        url: '/auth/register',
        method: 'POST',
        body: payload,
      }),
    }),
    logIn: builder.mutation({
      query: payload => ({
        url: '/auth/login',
        method: 'POST',
        body: payload,
      }),
    }),
    getCurrentUser: builder.query({
      // query: (token) => '/users/current',
      // providesTags: ['User'],
      // transformResponse: response => response.data
      query: (token) => `/users/current`,
      transformResponse: response => response.data
    }),
    logOut: builder.mutation({
      query: (token) => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: '/auth/forgotPassword',
        method: 'PATCH',
        body: { email },
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ id, password }) => ({
        url: '/auth/recoverPassword',
        method: 'PATCH',
        body: { id, password },
      }),
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: '/user/current',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: builder.mutation({
      query: payload => ({
        url: 'user/current/avatar',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLogInMutation,
  useLogOutMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
} = userApi;
