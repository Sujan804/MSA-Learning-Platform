import { apiSlice } from "../api/apiSlice";
import { setVideos } from "./videosSlice";
export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ({
        url: `/videos`,
      }),
      providesTags: ["videos"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("qe", result);
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
  }),
});

export const { useGetVideosQuery, useAddVideosMutation } = videosApi;
