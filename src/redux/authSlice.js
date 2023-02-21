const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null,
        email: null,
        phone: null,
        city: null,
        birthday: null,
        avatarUrl: "https://res.cloudinary.com/dwwvmul1w/image/upload/v1676982598/pets-project/avatars/63f123188cf128b0ee7866c6.jpg",
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
      // state.user.avatarUrl = action.payload.avatarUrl;

      state.token = action.payload.token;
      state.isLogged = true;
    },
    setLogoutUser: (state, action) => {
      state.token = "";
      state.isLogged = false;
    },
    setAvatarUrl: (state, action) => {
      state.user.avatarUrl = action.payload
    }
  },
});

export const { setUser, setCredentials, setLogoutUser, setAvatarUrl } = authSlice.actions;

export default authSlice.reducer;
