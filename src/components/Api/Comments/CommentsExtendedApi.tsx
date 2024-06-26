import { api } from "../MainApi";
import { commentType } from "../Interfaces";
import CommentsEnhancedApi from "./CommentsEnhancedApi";

const PostsExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<commentType[], number>({
      query: (id) => ({
        url: `posts/${id}/comments`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

CommentsEnhancedApi();

export const { useGetCommentsQuery } = PostsExtendedApi;
