export interface postType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface commentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface postTypeModal {
  body: string;
  title: string;
}

export interface editPostTypeModal {
  body: string;
  title: string;
  userId: number;
}

export interface DeleteResponse {
  message: string;
  success: boolean;
}
