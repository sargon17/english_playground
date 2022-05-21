import { configureStore } from "@reduxjs/toolkit";
import gameDataSlice from "../features/gameData/gameDataSlice";

export default configureStore({
  reducer: {
    gameData: gameDataSlice,
  },
});
