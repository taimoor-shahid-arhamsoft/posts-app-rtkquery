import { api } from "../MainApi";

const CommentsEnhancedApi = () => {
  api.enhanceEndpoints({
    endpoints: {
      getComments: {
        providesTags: ["Comment"],
      },
    },
  });
};

export default CommentsEnhancedApi;
