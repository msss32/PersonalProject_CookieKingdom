import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    signUp: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
  },
});
