import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { newsApi } from './newsSlice.js';
import authReducer from './authSlice';
import { authApi } from './authApi.js';
import { ourFriendsApi } from './ourFriendsApi';
import { userApi } from '../redux/fetchUser';
import { fetchNotice } from './fetchNotice';
import { noticeByIdApi } from './noticeByIdApi';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistReducer(persistConfig, authReducer),
    [newsApi.reducerPath]: newsApi.reducer,
    [ourFriendsApi.reducerPath]: ourFriendsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [fetchNotice.reducerPath]: fetchNotice.reducer,
    [noticeByIdApi.reducerPath]: noticeByIdApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      newsApi.middleware,
      authApi.middleware,
      ourFriendsApi.middleware,
      noticeByIdApi.middleware,
      userApi.middleware,
      fetchNotice.middleware
    ),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
