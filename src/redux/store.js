import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobDetail";
import jobListSlice from "./jobListSlice";

const store = configureStore({
  reducer: {
    jobDetail: jobSlice.reducer,
    jobList: jobListSlice.reducer,
  },
});

export default store;
