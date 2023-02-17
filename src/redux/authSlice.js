const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null },
  token: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user.name = action.payload.user.name;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    setUser: (state, action) => {
      state.user.name = action.payload.user.name;
      state.token = action.payload.token;
      state.isLogged = true;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
