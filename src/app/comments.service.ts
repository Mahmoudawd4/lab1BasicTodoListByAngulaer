import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<any[]>{
    return this.http.get<any[]>(this.commentsUrl);
  }
}
