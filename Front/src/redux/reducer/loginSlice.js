import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    id: "",
    pw: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = false;
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice.reducer;
