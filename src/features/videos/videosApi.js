import { apiSlice } from "../api/apiSlice";
import { setVideos } from "./videosSlice";
export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => {
        return {
          url: `/videos`,
        };
      },
      providesTags: ["videos"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            setVideos({
              videos: result.data,
            })
          );
        } catch (error) {}
      },
    }),
    addVideos: builder.mutation({
      query: (data) => ({
        url: `/videos`,
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
      invalidatesTags: ["videos"],
    }),
    deleteVideo: builder.mutation({
      query: (id) => {
        return {
          url: `/videos/${id}`,
          method: "DELETE",
          body: {},
        };
      },
      invalidatesTags: ["videos"],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => {
        console.log("id", id, data);
        return {
          url: `/videos/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        console.log("af", result.data);
      },
      invalidatesTags: ["videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useAddVideosMutation,
  useDeleteVideoMutation,
  useEditVideoMutation,
} = videosApi;
