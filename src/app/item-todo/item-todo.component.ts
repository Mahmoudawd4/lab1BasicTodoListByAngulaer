import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { UsersAuthService } from '../users-auth.service';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})



export class ItemTodoComponent {
  todos: Todo[] = [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
    },
    { id: 2, todo: 'Memorize the fifty states and their capitals', completed: true },
    { id: 3, todo: 'Watch a classic movie', completed: false }
  ];

  @Input() todo:any;
  // @Output() deletee = new EventEmitter() ;
  // @Output() favorited = new EventEmitter<string>();
  // @Output() completed = new EventEmitter<string>();

  constructor(private _router:Router,private _Todos:TodosService) { }



  delete(todo:Todo):void
  {
    this._Todos.deleteTodo(todo)
  }
  showDetails() {
    this._Todos.task = this.todos.find(todo => todo.id == this.todo.id)
    this._router.navigate(['/todos', this.todo.id]);
  }

  // delete(todo: Todo): void {
  //   const index = this.todos.findIndex(item => item.id === todo.id);
  //   if (index !== -1) {
  //     this.todos.splice(index, 1);
  //   }
  // }

  // onFavorite() {
  //   this.favorited.emit(this.todo.title);
  // }

  // onComplete() {
  //   this.completed.emit(this.todo.title);
  // }

  onComplete(title: string) {
    this._Todos.onComplete(title)
  }

    onFavorite(title: string) {
    this._Todos.onFavorite(title);
  }

  

}
