import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobDetail",
  initialState: { job: {} },
  reducers: {
    setJobDetail(state, action) {
      state.job = action.payload;
    },
  },
});

export const { setJobDetail } = jobSlice.actions;
export default jobSlice;
