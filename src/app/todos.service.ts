import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public isLiggedIn:boolean = false;
  public task:any
  constructor(private http: HttpClient){}
  todos: Todos[] = [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      favorite: true,
    },
    { id: 2, todo: 'Memorize the fifty states and their capitals', completed: true ,favorite: false, },
    { id: 3, todo: 'Watch a classic movie', completed: false ,favorite: false, }
  ];
  // getcategories(): Observable<Todos> {
  //   return this.httpClient.get<Categoryobj>(environment.baseUrl + 'categories');
  // }
  todosArray:Todos[]=[];


  newTodo: string = '';
  searchTerm: string = '';

  addTodo(todos:Todos)
  {
      this.todos.push(todos);
      console.log(this.todos);
      // this.newTodo = '';
  }

  // getAllTodo():Todos[]
  // {
  //   return this.todos.slice()
  // }
  getAllTodo(): Todos[] {
    return this.todos.filter(todo => !todo.isDeleted);
  }


  getDeletedTodos() {
    //  return this.getAllTodo().filter(todo => todo.isDeleted);
    return this.todos.filter(todo => todo.isDeleted);
  }


  // deleteTodo(todo:Todos)
  // {
  //   const index = this.todos.findIndex(item => item.id === todo.id);
  //   if (index !== -1) {
  //     this.todos.splice(index, 1);
  //   }
  // }

  // deleteTodo(todo:Todos)
  // {
  //   const index = this.todos.indexOf(todo);
  //   if (index !== -1) {
  //     this.todos.splice(index, 1);
  //   }
  // }

  deleteTodo(todo: Todos): void {
    todo.isDeleted = true;
  }

  clearDeleted(): void {
    this.todos = this.todos.filter(todo => !todo.isDeleted);
  }

  deletedCount(): number {
    return this.todos.filter(todo => todo.isDeleted).length;
  }

  onFavorite(title: string) {
    const index = this.todos.findIndex(todo => todo.todo === title);
    if (index !== -1) {
      this.todos[index].favorite = !this.todos[index].favorite;
    }
  }

  onComplete(title: string) {
    const index = this.todos.findIndex(todo => todo.todo === title);
    if (index !== -1) {
      this.todos[index].completed = true;
    }
  }

  getAllFavoriteTodos(): Todos[] {
    return this.todos.filter(todo => !todo.isDeleted && todo.favorite);
  }

  getAllTodosByHttp(): Observable<Object> {
    return this.http.get('https://dummyjson.com/todos');
  }

  // deletedCount() {
  //   return this.todos.filter(todo => todo.deleted).length;
  // }
  // completedPercentage() {
  //   const completedCount = this.todos.filter(todo => todo.completed).length;
  //   const totalCount = this.todos.length;
  //   return Math.round((completedCount / totalCount) * 100);
  // }
  // favoritesCount() {
  //   return this.todos.filter(todo => todo.favorite).length;
  // }
  favoritesCount(): number {
    return this.todos.filter(todo => todo.favorite).length;
    // console.log(this.todos.filter(todo => todo.favorite).length);

  }
  getTodoById(id: string): Todos | undefined {
    // return this.todos.find((todo) => todo.id === parseInt(id:number));
    return this.todos.find((todo: any) => todo.id === parseInt(id, 10));
  }

  // getProductById(id: number): Observable<Todos> {
  //   return this..get<Todos>
  // }

  // completedPercentage(): number {
  //   const completedTodos = this.todos.filter(todo => todo.completed);
  //   return completedTodos.length / this.todos.length * 100;
  // }
  completedPercentage(): number {
  const completedTodos = this.todos.filter(todo => todo.completed && !todo.isDeleted);
  const totalTodos = this.todos.filter(todo => !todo.isDeleted);
  const percentage = (completedTodos.length / totalTodos.length) * 100;
  return percentage || 0;
  }


}
