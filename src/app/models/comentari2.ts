export interface Comentari {
  id: number;
  contribution_id: number;
  author: string;
  data: string;
  user_id: number;
  likes: number;
  comments_fills: Comentari[];
  content: string;
}

export interface bodyComentariPost{
  COMENTARI_ID: number;
  CONTRIBUTION_ID: number;
  content: String;
}
