import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchNotice = createApi({
  reducerPath: 'noticeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      if (getState().users !== undefined) {
        const token = getState().users.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      } else {
        return '';
      }
    },
  }),
  tagTypes: ['UserNotice', 'Notice', 'Favorites'],
  endpoints: builder => ({
    getUserNotices: builder.query({
      query: () => '/notices',
      providesTags: ['UserNotice'],
    }),
    getNotice: builder.query({
      query: ({ category, search = '' }) => ({
        url: `/notices/${category}?search=${search}`,

        method: 'GET',
      }),
      transformResponse: response => response.data,
      providesTags: ['Notice'],
    }),
    getNoticeByWord: builder.query({
      query: name => `/notice/search/${name}`,
      providesTags: ['Notice', 'UserNotice'],
    }),
    addNotice: builder.mutation({
      query: payload => ({
        url: '/notice/add',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['UserNotice'],
    }),
    deleteUserNoticeById: builder.mutation({
      query: id => ({
        url: `/user/notices/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['UserNotice'],
    }),
    getNoticeFavorites: builder.query({
      query: () => '/user/favorites',
      providesTags: ['Favorites'],
    }),
    addToFavorites: builder.mutation({
      query: id => ({
        url: `/user/favorites/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Favorites'],
    }),
    deleteFromFavorites: builder.mutation({
      query: id => ({
        url: `/user/favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const {
  useGetNoticeQuery,
  useGetNoticeByWordQuery,
  useAddNoticeMutation,
  useGetUserNoticesQuery,
  useDeleteUserNoticeByIdMutation,
  useGetNoticeFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} = fetchNotice;
