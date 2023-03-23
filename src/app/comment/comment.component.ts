import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent {
  comments!: any[];

  constructor(private _router:Router,private _Comment:CommentsService) {
    
  }

  // ngOnInit() {
  //   this._Comment.getAllComments().subscribe(
  //     (result) => {
  //       this.comments = result;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
 
  ngOnInit(): void {
    this._Comment.getAllComments().subscribe(comments => {
      this.comments = Object.values(comments);
      console.log(this.comments);
      
    });
  }



  // getComments()
  // {
  //  this._Comment.getAllComments().subscribe(
  //     (result) => {
  //       this.comments= result;
  //       console.log(result);
  //       console.log(this.comments);
        
        
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }




}
