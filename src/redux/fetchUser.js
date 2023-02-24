import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
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
        url: '/users/logout',
        method: 'GET',
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
      query: ( {values}) => ({
        url: '/users/update',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    // updateUserAvatar: builder.mutation({
    //   query: payload => ({
    //     url: 'users/avatar',
    //     method: 'PATCH',
    //     body: payload,
    //   }),
    //   invalidatesTags: ['User'],
    // }),
    // / updateUserAvatar: builder.mutation({
    //   query: payload => ({
    //     url: 'users/avatar',
    //     method: 'PATCH',
    //     body: payload,
    //   }),
    //   invalidatesTags: ['User'],
    // })
    //   updateUserAvatar: builder.mutation({
    //   query: (file) => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');
    //       formData.append('folder', 'YOUR_FOLDER');
    //       return {
    //     url: 'users/avatar',
    //     method: 'PATCH',
    //     body: payload,
    //   },
    //   invalidatesTags: ['User'],
    // }),
    updateUserAvatar: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append("avatar", file);
        return {
          url: "/users/avatars",
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["User"],
    }),
    getUserPets: builder.query({
      query: () => ({
        url:'/users/pets',
        method: 'GET',
        
      }),
      transformResponse: response => response.data,
      providesTags: ["Pet"],
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
  useGetUserPetsQuery,
} = userApi;
