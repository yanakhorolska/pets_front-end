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
  tagTypes: ['User', 'Pet'],
  endpoints: builder => ({
    registrationUser: builder.mutation({
      query: payload => ({
        url: '/users/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User']
    }),
    logInUser: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User']
    }),
    getCurrentUser: builder.query({
      query: () => `/users/current`,
      transformResponse: response => response.data,
      invalidatesTags: ['User'],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
    // forgotPassword: builder.mutation({
    //   query: ({ email }) => ({
    //     url: '/auth/forgotPassword',
    //     method: 'PATCH',
    //     body: { email },
    //   }),
    // }),
    // updatePassword: builder.mutation({
    //   query: ({ id, password }) => ({
    //     url: '/auth/recoverPassword',
    //     method: 'PATCH',
    //     body: { id, password },
    //   }),
    // }),
    updateUser: builder.mutation({
      query: values => ({
        url: '/users/update',
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: builder.mutation({
      query: file => {
        const formData = new FormData();
        formData.append('avatar', file);
        return {
          url: '/users/avatars',
          method: 'PATCH',
          body: formData,
        };
      },
      invalidatesTags: ['User'],
    }),

    getUserPets: builder.query({
      query: () => '/users/pets',
      transformResponse: response => response.data,
      providesTags: ['Pet'],
    }),
    addPet: builder.mutation({
      query: payload => {
        const formData = new FormData();
        Object.keys(payload).forEach(key => formData.append(key, payload[key]));
        return {
          url: `/pets`,
          method: 'POST',
          body: formData,
        };
      },
      transformResponse: response => response.status,
      invalidatesTags: ['Pet'],
    }),
    removePetById: builder.mutation({
      query: id => ({
        url: `/pets/${id}`,
        method: 'DELETE',
        body: id,
      }),
      transformResponse: response => response.status,
      invalidatesTags: ['Pet'],
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  //useForgotPasswordMutation,
  //useUpdatePasswordMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
  useGetUserPetsQuery,
  useAddPetMutation,
  useRemovePetByIdMutation,
} = userApi;
