const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
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
      state.user.name = action.payload.user.name;
      state.token = action.payload.token;
      state.isLogged = true;
    },
  },
});

export const { setUser, setCredentials } = authSlice.actions;

export default authSlice.reducer;
