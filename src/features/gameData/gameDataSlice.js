import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
  name: "gameData",
  initialState: {
    value: [],
  },
  reducers: {
    setWordsToWriteRedux: (state, action) => {
      state.value = action.payload;
    },
    addWordsToWriteRedux: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeWordsToWriteRedux: (state, action) => {
      state.value = state.value.filter((word) => word !== action.payload);
    },
  },
});

export const {
  setWordsToWriteRedux,
  addWordsToWriteRedux,
  removeWordsToWriteRedux,
} = gameDataSlice.actions;

export const selectWordsToWrite = (state) => state.gameData.value;

export default gameDataSlice.reducer;
