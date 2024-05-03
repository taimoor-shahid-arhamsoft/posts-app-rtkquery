import { api } from "../MainApi";

const CommentsEnhancedApi = () => {
  api.enhanceEndpoints({
    endpoints: {
      getComments: {
        invalidatesTags: ["Comment"],
      },
    },
  });
};

export default CommentsEnhancedApi;
