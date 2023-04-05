import { apiSlice } from "../api/apiSlice";
import { setQuizzes } from "./quizSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => ({
        url: `/quizzes`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            setQuizzes({
              quizzes: result.data,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetQuizzesQuery } = quizApi;
