import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    id: "",
    pw: "",
    isLogin: false,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = true;
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice.reducer;
