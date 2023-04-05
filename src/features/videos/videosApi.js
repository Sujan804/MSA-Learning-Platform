import { apiSlice } from "../api/apiSlice";
import { setVideos } from "./videosSlice";
export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ({
        url: `/videos`,
      }),
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
  }),
});

export const { useGetVideosQuery } = videosApi;
