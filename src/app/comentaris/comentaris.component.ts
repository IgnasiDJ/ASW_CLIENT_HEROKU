import { Component, OnInit } from '@angular/core';
import { Comentari } from '../models/comentari';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ComentariService } from '../comentari.service';





@Component({
  selector: 'app-comentaris',
  templateUrl: './comentaris.component.html',
  providers: [ComentariService],
  styleUrls: ['./comentaris.component.css']
})
export class ComentarisComponent implements OnInit {

  getResponse?: Comentari;
  idGetComment: number = 2;
  idPostComment: number = 2;
  idContribution: number = 2;
  postContent: String = 'Write content here';
  lastRequestSent = '';

  constructor(private comentarisService: ComentariService) {
  }

  ngOnInit(): void {
  }


  getComment(idGetComment:number): void {
    console.log(idGetComment);
    this.comentarisService.getComentari(idGetComment).subscribe((data: Comentari) => this.getResponse= {
        id: data.id,
        contribution_id: data.contribution_id,
        author: data.author,
        data: data.data,
        user_id: data.user_id,
        likes: data.likes,
        comments_fill_id: data.comments_fill_id,
        content: data.content
        });

        this.lastRequestSent = 'GET';
  }

  postComment(idPostComment:number, idContribution:number, postContent: String): void {
    this.comentarisService.postComentariComentari(idPostComment,idContribution,postContent).subscribe((data: Comentari) => this.getResponse= {
        id: data.id,
        contribution_id: data.contribution_id,
        author: data.author,
        data: data.data,
        user_id: data.user_id,
        likes: data.likes,
        comments_fill_id: data.comments_fill_id,
        content: data.content
        });
        console.log(this.getResponse);

        this.lastRequestSent = 'POST';
  }






}
