import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {
    value: 0,
  },
  reducers: {
    setWordsToWriteRedux: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWordsToWriteRedux } = gameDataSlice.actions;
// export const selectWordsToWrite = (state) => state.gameData.value;

export default gameDataSlice.reducer;
