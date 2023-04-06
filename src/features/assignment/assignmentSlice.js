import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const AssignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload.assignments;
    },
  },
});

export const { setAssignments } = AssignmentSlice.actions;
export default AssignmentSlice.reducer;
