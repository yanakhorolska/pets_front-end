import { userApi } from './fetchUser'
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    city: null,
    birthday: null,
    avatarURL: null,
  },
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  //   setCredentials: (state, {payload}) => {
  //     state.user.name = payload.user.name;
  //     state.user.email = payload.user.email;
  //     state.token = payload.token;
  //     state.isLogged = true;
  //   },
  //   setUser: (state, {payload}) => {
  //     state.user.name = payload.name;
  //     state.user.email = payload.email;
  //     state.user.phone = payload.phone;
  //     state.user.city = payload.city;
  //     state.user.birthday = payload.birthday;
  //     state.user.avatarURL = payload.avatarURL;
  //     // state.token = action.payload.token;
  //     state.isLogged = true;
  //   },
  //   setLogoutUser: (state) => {
  //     state.token = '';
  //     state.user = {};
  //     state.isLogged = false;
  //   },
  //   setUpdatedUser: (state, {payload}) => {
  //     state.user.name = payload.name;
  //     state.user.email = payload.email;
  //     state.user.phone = payload.phone;
  //     state.user.city = payload.city;
  //     state.user.birthday = payload.birthday;
  //   },
  //   setAvatarURL: (state, {payload}) => {
  //     state.user.avatarURL = payload;
  //   },
  //   setCurrentUser: (state, {payload}) => {
  //     state.user.name = payload.name;
  //     state.user.email = payload.email;
  //     state.user.phone = payload.phone;
  //     state.user.city = payload.city;
  //     state.user.birthday = payload.birthday;
  //     state.user.avatarURL = payload.avatarURL;
  //     state.isLogged = true;
  //   },
  // },
  extraReducers: (builder) => {
    builder
    .addMatcher(//"setCredentials",
      userApi.endpoints.logInUser.matchFulfilled,
      (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogged = true;
      }
    )
    .addMatcher(//"setLogoutUser",
      userApi.endpoints.logOutUser.matchFulfilled,
      (state) => { 
        state.token = '';
        state.user = {};
        state.isLogged = false;
      }
    )
    .addMatcher(//"setCurrentUser",
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.city = payload.city;
        state.user.birthday = payload.birthday;
        state.user.avatarURL = payload.avatarURL;
        state.user = {...state.user, ...payload.user}
        state.isLogged = true;
      }
    )
    .addMatcher(//"setAvatarURL",
      userApi.endpoints.updateUserAvatar.matchFulfilled,
      (state, {payload}) => {
        state.user.avatarURL = payload;
      }
    )
  }
});

export default authSlice.reducer;
