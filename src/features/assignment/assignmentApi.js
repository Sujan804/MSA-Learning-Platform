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
      providesTags: ["assignments"],
    }),
    addAssignments: builder.mutation({
      query: (data) => ({
        url: `/assignments`,
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
      invalidatesTags: ["assignments"],
    }),
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["assignments"],
    }),
    editAssignment: builder.mutation({
      query: ({ id, data }) => {
        console.log("id", id, "data", data);
        return {
          url: `/assignments/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["assignments"],
    }),
  }),
});

export const {
  useGetAssignmentsQuery,
  useAddAssignmentsMutation,
  useDeleteAssignmentMutation,
  useEditAssignmentMutation,
} = assignmentApi;
