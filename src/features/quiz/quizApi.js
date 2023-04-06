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
      providesTags: ["quizzes"],
    }),
    addQuizzes: builder.mutation({
      query: (data) => ({
        url: `/quizzes`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            console.log("result", result.data);
          }
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: ["quizzes"],
    }),
  }),
});

export const { useGetQuizzesQuery, useAddQuizzesMutation } = quizApi;
