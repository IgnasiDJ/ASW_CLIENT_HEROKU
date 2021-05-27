export interface Comentari {
  id: number;
  contribution_id: number;
  author: string;
  data: string;
  user_id: number;
  likes: number;
  comments_fill_id: number[];
  content: string;
}

export interface bodyComentariPost{
  COMENTARI_ID: number;
  CONTRIBUTION_ID: number;
  content: String;
}

export interface bodyComentariPostContribucio{
  CONTRIBUTION_ID: number;
  content: String;
}
