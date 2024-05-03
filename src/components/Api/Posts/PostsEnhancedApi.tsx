import { api } from "../MainApi";

const PostsEnhancedApi = () => {
  api.enhanceEndpoints({
    endpoints: {
      getPosts: {
        providesTags: ["Post"],
      },
      getSinglePost: {
        providesTags: ["Post"],
      },
      addPost: {
        invalidatesTags: ["Post"],
      },
      editPost: {
        invalidatesTags: ["Post"],
      },
      deletePost: {
        invalidatesTags: ["Post"],
      },
    },
  });
};

export default PostsEnhancedApi;
