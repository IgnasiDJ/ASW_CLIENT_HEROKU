import { Injectable } from '@angular/core';
import { Comentari, bodyComentariPost,  bodyComentariPostContribucio} from './models/comentari';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class ComentariService {

  urlHeroku = 'https://lit-sierra-61118.herokuapp.com/comentaris';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'API_KEY': '112042085268345945184'
    })
  };

  constructor(private http: HttpClient) {}

  getComentari(idGetComment:number): Observable<Comentari> {
    const url = `${this.urlHeroku}/${idGetComment}`;
    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");

    return this.http.get<Comentari>(url,{headers});
  }

  postComentariComentari(idPostComment:number, idContribution:number, postContent: String): Observable<Comentari> {

    var commPost: bodyComentariPost = {
      COMENTARI_ID: idPostComment,
      CONTRIBUTION_ID: idContribution,
      content: postContent,
    };

    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");
    return this.http.post<Comentari>(this.urlHeroku, commPost, {headers});
  }

  postComentariContribucio(idContribution:number, postContent: String): Observable<Comentari> {

    var commPost: bodyComentariPostContribucio = {
      CONTRIBUTION_ID: idContribution,
      content: postContent,
    };

    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");
    return this.http.post<Comentari>(this.urlHeroku, commPost, {headers});
  }

  public likeComentari(id_comentari: number): void{
    const url = "https://lit-sierra-61118.herokuapp.com/comentaris/" + id_comentari + "/like";
    const headers = new HttpHeaders()
                      .set("API_KEY", "112042085268345945184")
                      .set("accept", "application/json");

    this.http.put(url, {"like": "1"}, {headers}).subscribe();
    //this.update();
  }

  public dislikeComentari(id_comentari: number): void{
    const url = "https://lit-sierra-61118.herokuapp.com/comentaris/" + id_comentari + "/dislike";
    const headers = new HttpHeaders()
                        .set("API_KEY", "112042085268345945184")
                        .set("accept", "application/json");

    this.http.put(url, {"dislike": "1"}, {headers}).subscribe();
    //this.update();
  }
}
