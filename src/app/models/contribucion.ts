import { Comentari } from './comentari2';

export interface IContribution {
    id: number;
    author:string;
    content:string;
    info:string;
    url:string;
    data:string;
    user_id:number;
    likes: number;
    titol:string;
    comments:Comentari[];
}
