const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    user: {
        name: null,
        email: null,
        phone: null,
        city: null,
        birthday: null,
        avatarUrl: null,
    },
  token: null,
  isLogged: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.data.token;
      state.isLogged = true;
    },
    }
})

export const { setUser} = userSlice.actions;
export default userSlice.reduser;

