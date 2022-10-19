import { createSlice } from "@reduxjs/toolkit";

const joinSlice = createSlice({
  name: "join",
  initialState: { id: "", pw: "", name: "" },
  reducers: {
    joinId: (state, action) => {
      state.id = action.payload;
    },
    joinPw: (state, action) => {
      state.pw = action.payload;
    },
    joinName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const joinAction = joinSlice.actions;

export default joinSlice.reducer;
