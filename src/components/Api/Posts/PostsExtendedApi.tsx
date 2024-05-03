import { api } from "../MainApi";
import {
  postType,
  postTypeModal,
  editPostTypeModal,
  DeleteResponse,
} from "../Interfaces";
import PostsEnhancedApi from "./PostsEnhancedApi";

const notesExtendedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<postType[], null>({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query<postType, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    addPost: builder.mutation<postType, postTypeModal>({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
      }),
    }),
    editPost: builder.mutation<postType, editPostTypeModal>({
      query: (editPost) => ({
        url: `posts`,
        method: "POST",
        body: editPost,
      }),
    }),
    deletePost: builder.mutation<DeleteResponse, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: true,
});

PostsEnhancedApi();

export const {
  useGetPostsQuery,
  useGetSinglePostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = notesExtendedApi;
