import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
};

const QuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload.quizzes;
    },
  },
});

export const { setQuizzes } = QuizSlice.actions;
export default QuizSlice.reducer;
