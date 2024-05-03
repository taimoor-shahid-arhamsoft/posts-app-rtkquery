import { api } from "../MainApi";

const PhotosEnhancedApi = () => {
  api.enhanceEndpoints({
    endpoints: {
      getComments: {
        providesTags: ["Photo"],
      },
    },
  });
};

export default PhotosEnhancedApi;
