import { apiSlice } from "../api/apiSlice";
import { setAssignments } from "./assignmentSlice";

export const assignmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => ({
        url: `/assignments`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            setAssignments({
              assignments: result.data,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetAssignmentsQuery } = assignmentApi;
