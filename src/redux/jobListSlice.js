import { createSlice } from "@reduxjs/toolkit";

const jobListSlice = createSlice({
  name: "jobList",
  initialState: { search: "web developer", data: [] },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setSearch, setData } = jobListSlice.actions;
export default jobListSlice;
