import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobDetail";

const store = configureStore({
  reducer: {
    jobDetail: jobSlice.reducer,
  },
});

export default store;
