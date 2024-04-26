import { createSlice } from "@reduxjs/toolkit";

const jobListSlice = createSlice({
  name: "jobList",
  initialState: { page: 1, search: "web developer", data: [] },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setPage, setSearch, setData } = jobListSlice.actions;
export default jobListSlice;
