import { createSlice } from "@reduxjs/toolkit";

export const pickSlice = createSlice({
  name: "cardPick",
  initialState: { pick: "off" },
  reducers: {
    pick: (state, action) => {
      state.pick = action.payload;
    },
  },
});

export const pickAction = pickSlice.actions;

export default pickSlice.reducer;
