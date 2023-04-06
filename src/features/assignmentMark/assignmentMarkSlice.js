import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignmentMarks: [],
};

const assignmentMarksSlice = createSlice({
  name: "AssignmentMark",
  initialState,
  reducers: {
    setAssignmentMarks: (state, action) => {
      state.assignmentMarks = action.payload.assignmentMarks;
    },
  },
});
export const { setAssignmentMarks } = assignmentMarksSlice.actions;
export default assignmentMarksSlice.reducer;
