import { apiSlice } from "../api/apiSlice";
import { setAssignmentMarks } from "./assignmentMarkSlice";
export const assignmentMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMarks: builder.query({
      query: () => ({
        url: `/assignmentMark`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            setAssignmentMarks({
              assignmentMarks: result.data,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetAssignmentMarksQuery } = assignmentMarkApi;
