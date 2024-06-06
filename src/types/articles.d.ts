export interface GetArticlesParams {
  page?: number;
  pageSize?: number | string;
  orderBy?: "like" | "recent";
  keyword?: string;
}

export interface GetArticlesResponse {
  list: Article[];
  totalCount: number;
}

export interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: { id: number; nickname: string };
}
