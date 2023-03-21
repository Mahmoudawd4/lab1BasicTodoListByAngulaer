import { Component } from '@angular/core';
import { TodosService } from '../todos.service';


interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})





export class TodoListComponent {
  constructor(private _todoServes:TodosService){}

  todo :any ;
  todos: Todo[] = [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
    },
    { id: 2, todo: 'Memorize the fifty states and their capitals', completed: true },
    { id: 3, todo: 'Watch a classic movie', completed: false }
  ];

  newTodo: string = '';
  searchTerm: string = '';
  // name: string;
  // favoriteQuote: string;
  // todosCount: number;

  // get filteredTodos(): Todo[] {
  //   return this.todos.filter(todo => todo.todo.toLowerCase().includes(this.searchTerm.toLowerCase()));
  // }

    get filteredTodos(): Todo[] {
    return this._todoServes.getAllTodo();
  }

  // onSubmit(): void {
  //   if (this.newTodo.trim()) {
  //     const newId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
  //     const newTodo: Todo = {
  //       id: newId,
  //       todo: this.newTodo.trim(),
  //       completed: false
  //     };

  //     this.todos.push(newTodo);
  //     console.log(this.todos);

  //     this.newTodo = '';
  //   }
  // }
  onSubmit(): void {

      if (this.newTodo.trim()) {
      const newId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
      const newTodo: Todo = {
        id: newId,
        todo: this.newTodo.trim(),
        completed: false
      };

    this._todoServes.addTodo(newTodo)
         this.newTodo = '';

  }

  }

  delete(todo: Todo): void {
    const index = this.todos.findIndex(item => item.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  // onFavorite(title: string) {
  //   const index = this.todos.findIndex(todo => todo.title === title);
  //   if (index !== -1) {
  //     this.todos[index].favorite = !this.todos[index].favorite;
  //   }
  // }

  onComplete(title: string) {
    this._todoServes.onComplete(title)
  }

  getAllFavoriteTodos(){
    this._todoServes.getAllFavoriteTodos()
  }

}
