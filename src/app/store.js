import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import assignmentSliceReducer from "../features/assignment/assignmentSlice";
import assignmentMarkSliceReducer from "../features/assignmentMark/assignmentMarkSlice";
import authSliceReducer from "../features/auth/authSlice";
import quizSliceReducer from "../features/quiz/quizSlice";
import videosSliceReducer from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    auth: authSliceReducer,
    video: videosSliceReducer,
    quiz: quizSliceReducer,
    assignment: assignmentSliceReducer,
    assignmentMark: assignmentMarkSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
