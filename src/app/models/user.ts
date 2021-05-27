import { IContribution } from './contribucion';
import { Comentari } from './comentari';

export interface User {
  contributions: IContribution[];
  comentaris: Comentari[];
  liked_contributions?: IContribution[];
  liked_comentaris?: Comentari[];
  user_info: userinfo;
}

export interface userinfo {
  api_key?: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
}
