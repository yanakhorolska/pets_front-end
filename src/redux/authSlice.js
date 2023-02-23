const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null,
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
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLogged = true;
    },
    setUser: (state, action) => {
      // state.user = action.payload;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.city = action.payload.city;
      state.user.birthday = action.payload.birthday;
      state.user.avatarURL = action.payload.avatarURL
      
      // state.user.avatarUrl = action.payload.avatarUrl;

      state.token = action.payload.token;
      state.isLogged = true;
    },
    setLogoutUser: (state, action) => {
      state.token = "";
      state.isLogged = false;
    },
    setUpdatedUser: (state, action)   => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.city = action.payload.city;
      state.user.birthday = action.payload.birthday;
    },
    setAvatarURL: (state, action) => {
      state.user.avatarURL = action.payload
    }
  },
});

export const { setUser, setCredentials, setLogoutUser, setAvatarURL, setUpdatedUser } = authSlice.actions;

export default authSlice.reducer;
