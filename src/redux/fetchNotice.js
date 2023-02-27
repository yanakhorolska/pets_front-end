import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchNotice = createApi({
  reducerPath: 'noticeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-back-end.vercel.app/api',
    prepareHeaders: (headers, { getState }) => {
      if (getState().auth !== undefined) {
        const token = getState().auth.token;
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
      query: () => '/notices/myNotices',
      providesTags: ['UserNotice', 'Notice'],
    }),
    getNotice: builder.query({
      query: ({ category, search = '' }) => ({
        url: `/notices/category/${category}?search=${search}`,

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
      query: payload => {
        const formData = new FormData();
        const { category, ...data } = payload;
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('category', category);
        return {
          url: `/notices/category/${category}`,
          method: 'POST',
          body: formData,
        };
      },
      transformResponse: response => response.status,
      invalidatesTags: ['Notice'],
    }),
    deleteUserNoticeById: builder.mutation({
      query: id => ({
        url: `/notices/myNotices/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['UserNotice', 'Notice'],
    }),
    getNoticeFavorites: builder.query({
      query: () => '/notices/favorites',
      providesTags: ['Favorites', 'Notice'],
    }),
    addToFavorites: builder.mutation({
      query: id => ({
        url: `/notices/favorites/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Favorites', 'Notice', 'UserNotice'],
    }),
    deleteFromFavorites: builder.mutation({
      query: id => ({
        url: `/notices/favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites', 'Notice', 'UserNotice'],
    }),
    getNoticeById: builder.query({
      query: _id => `/notices/${_id}`,
      transformResponse: response => response.data,
      providesTags: ['Favorites', 'Notice', 'UserNotice'],
    }),
    providesTags: ['Notice'],
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
  useGetNoticeByIdQuery,
} = fetchNotice;
