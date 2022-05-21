import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {
    wordsToWrite: [],
  },
  reducers: {
    setWordsToWrite: (state, action) => {
      state.wordsToWrite = action.payload;
    },
  },
});

export const { setWordsToWrite } = gameDataSlice.actions;

export default gameDataSlice.reducer;
