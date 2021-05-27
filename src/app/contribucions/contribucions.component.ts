import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { IContribution } from '../models/contribucion';
import { IMythreads } from '../models/mythreads';


import { ComentariService } from '../comentari.service';
import { Comentari } from '../models/comentari';


import { User } from '../models/user';



@Component({
  selector: 'app-contribucions',
  templateUrl: './contribucions.component.html',
  styleUrls: ['./contribucions.component.css']
})
export class ContribucionsComponent implements OnInit {

  LISTACONTRIBUCIONS: IContribution[] = [];
  LISTACOMENTARIS?: Comentari[];
  origin: String = "";
  TITLEPAGE:String = "Welcome to our HackerNews inspired web";
  SelectedContribution?: IContribution;
  SelectedUser?: User;

/*
  onSelect(elem: InterfaceContribution): void {
    this.selectedElem = elem;

    list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )
  }*/

  public isURL(url:string): boolean{
      if(url) return true;
      return false;
  }

  public getRecientes(): void{
    const url = "https://lit-sierra-61118.herokuapp.com/recientes";
    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");

     this.http.get<IContribution[]>(url,{headers}).subscribe(
       (data: IContribution[]) => this.LISTACONTRIBUCIONS =data );
  }

  public getAsk(): void{
    this.origin="asks";
    const url = "https://lit-sierra-61118.herokuapp.com/asks";
    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");

    this.http.get<IContribution[]>(url,{headers}).subscribe(
       (data: IContribution[]) => this.LISTACONTRIBUCIONS =data );
  }

  public getIndex(): void{
    this.origin="index";
    const url = "https://lit-sierra-61118.herokuapp.com/";
    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");

    this.http.get<IContribution[]>(url,{headers}).subscribe(
       (data: IContribution[]) => this.LISTACONTRIBUCIONS = data);


  }

  public getMyThreads(): void{
    const url = "https://lit-sierra-61118.herokuapp.com/mythreads";
    const headers = new HttpHeaders()
                .set("API_KEY", "112042085268345945184")
                .set("accept", "application/json");
    var tmp;
    this.http.get<IMythreads>(url,{headers}).subscribe(
       (data) =>this.LISTACONTRIBUCIONS = data.contributions );
   this.http.get<IMythreads>(url,{headers}).subscribe(
      (data) =>this.LISTACOMENTARIS = data.comentaris );
    this.origin="mythreads";
  }

  public likeComentari(id_comment: number): void{
    this.cs.likeComentari(id_comment);
  }

  public dislikeComentari(id_comment: number): void{
    this.cs.dislikeComentari(id_comment);
    }

    public dislikeContribution(id_contribution: number): void{
       const url = "https://lit-sierra-61118.herokuapp.com/contributions/" + id_contribution + "/dislike";
       const headers = new HttpHeaders()
                   .set("API_KEY", "112042085268345945184")
                   .set("accept", "application/json");

       this.http.put(url, {"dislike": "1"}, {headers}).subscribe();
       this.update();
   }

   public likeContribution(id_contribution: number): void{
      const url = "https://lit-sierra-61118.herokuapp.com/contributions/" + id_contribution + "/like";
      const headers = new HttpHeaders()
                  .set("API_KEY", "112042085268345945184")
                  .set("accept", "application/json");

      this.http.put(url, {"like": "1"}, {headers}).subscribe();
      this.update();
  }

    public update(): void{/*
      if(this.origin=="recientes") this.getRecientes();
      if(this.origin=="mythreads") this.getMyThreads();
      if(this.origin=="asks") this.getAsk();
      if(this.origin=="user" && this.SelectedUser!=null) this.getUser(this.SelectedUser.user_info.id);
      if(this.origin=="show" &&  this.SelectedContribution!=null) this.show(this.SelectedContribution.id);*/
    }

    public displayForm(id:number):void{
      var arg:string = String(id);
      var elem = document.getElementById(arg);
      console.log(elem);
      if(elem!= null)  elem.classList.toggle("hidden");
    }


    public getUser(id:number):void{
      this.origin = "user";
      const url = "https://lit-sierra-61118.herokuapp.com/users/"+ id;
      const headers = new HttpHeaders()
                  .set("API_KEY", "112042085268345945184")
                  .set("accept", "application/json");
      this.http.get<User>(url,{headers}).subscribe(
         (data) =>this.SelectedUser = data);

    }

    public newDescription():void{
      console.log("log: Description");
      var about = (<HTMLInputElement>document.getElementById("DescriptionInput")).value;
      var id = 0;
      if(this.SelectedUser!=null) id = this.SelectedUser.user_info.id;
      const url = "https://lit-sierra-61118.herokuapp.com/users/"+ id;
      const headers = new HttpHeaders()
                  .set("API_KEY", "112042085268345945184")
                  .set("accept", "application/json");

      this.http.put(url, {"new_description": about}, {headers}).subscribe();
      this.update();
    }

    public showContribution():void{
      this.origin="newcontribution";
    }
    public postContribution():void{
      this.origin="newcontribution";
      var Formtitol = (<HTMLInputElement>document.getElementById("FormTitol")).value;
      var FormURL = (<HTMLInputElement>document.getElementById("FormURL")).value;
      var FormContent = (<HTMLInputElement>document.getElementById("FormContent")).value;
      var commPost;
      if(FormContent.length==0){
        commPost = {
          titol: Formtitol,
          url: FormURL
        };
      }
      else if(FormURL.length==0){
        commPost = {
          titol: Formtitol,
          content: FormContent
        };
      }
     else {
       commPost = {
         titol: Formtitol,
         content: FormContent,
         url: FormURL
       };
     }
     if( (Formtitol.length>0) &&
     (FormURL.length!=0 || FormContent.length!=0) ){
       const url = "https://lit-sierra-61118.herokuapp.com/contributions";
       const headers = new HttpHeaders()
                   .set("API_KEY", "112042085268345945184")
                   .set("accept", "application/json");
       this.http.post(url, commPost, {headers}).subscribe(data => console.log(data));
     }




    }

    public postComment(id_form:number): void{
      if(this.SelectedContribution!=null){
        var id_contribution = this.SelectedContribution.id;
        var input = (<HTMLInputElement>document.getElementById("input"+id_form)).value;
        var commPost = {
          CONTRIBUTION_ID: id_contribution,
          content: input,
        };
        if(id_form!=-1){
          var tmp = {
            CONTRIBUTION_ID: id_contribution,
            content: input,
            COMENTARI_ID: id_form,
          };
          commPost = tmp;
        }
        const url = "https://lit-sierra-61118.herokuapp.com/comentaris/";
        const headers = new HttpHeaders()
                    .set("API_KEY", "112042085268345945184")
                    .set("accept", "application/json");
        this.http.post(url, commPost, {headers}).subscribe(data => console.log(data));
    }

    }
    public show(id_contribution: number): void{
      this.origin="show";
      this.LISTACONTRIBUCIONS = [];
      this.LISTACOMENTARIS = [];
      const url = "https://lit-sierra-61118.herokuapp.com/contributions/" + id_contribution;
      const headers = new HttpHeaders()
                  .set("API_KEY", "112042085268345945184")
                  .set("accept", "application/json");
      this.http.get<IContribution>(url,{headers}).subscribe(
         (data) =>this.SelectedContribution = data );

      console.log(this.SelectedContribution);
    }


  constructor(private http: HttpClient, private cs: ComentariService) {
  }

  ngOnInit(): void {
    this.getIndex();
  }



}
