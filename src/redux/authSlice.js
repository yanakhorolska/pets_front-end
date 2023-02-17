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
      state.user.name = action.payload.data.user.name;
      state.token = action.payload.data.token;
      state.isLogged = true;
    },
    setUser: (state, action) => {
      state.user.name = action.payload.data.name;
      state.token = action.payload.data.token;
      state.isLogged = true;
    },
    setCurrentUser: (state, action) => {
      state.user.name = action.payload.data.user.name;
      state.isLogged = true;
    },
  },
});

export const { setCurrentUser, setUser } = authSlice.actions;

export default authSlice.reducer;
