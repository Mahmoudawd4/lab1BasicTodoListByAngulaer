import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-details-component',
  templateUrl: './todo-details-component.component.html',
  styleUrls: ['./todo-details-component.component.css']
})

export class TodoDetailsComponentComponent {
  // todoid:any='';
  @Input() todos!: Todos;
  // @Input() todo: Todos;
  todosid:any ;
  id:any;
  singletodo:any
  todo!: Todos;
  constructor(private router: Router, private _Todos:TodosService ,private _activateRoute : ActivatedRoute) {
    // console.log(this._activateRoute.snapshot.params['id']);
    this.id = this._activateRoute.snapshot.params['id']
    this.todosid = this._Todos.getTodoById(this.id)
    this.singletodo = _Todos.getTodoById(this.id)
    // console.log(_Todos.getTodoById(this.id));

    // this.getTodoById();


  }
  ngOnInit() {
    // const _id = this._activateRoute.snapshot.paramMap.get('id');
    // this.todo!= this._Todos.getTodoById(this.id);
  }
  // todosid:any ;
  // constructor(private router: Router, private _Todos:TodosService, private _activateRoute : ActivatedRoute) {


  //  }
  // showDetails() {
  //   this.router.navigate(['/todos', this.todos.id]);
  // }

  // const id = +this.route.snapshot.paramMap.get('id');
  //   this.todo = this.todoService.getTodoById(id);



  // getTodoById(): void {
  //   // const id = this._activateRoute.snapshot.params['id']
  //   this.todo!= this._Todos.getTodoById(this.id);
  // }

  // getProductById(){
  //   this._Todos.getTodoById(this.id).subscribe(
  //     (res)=>{
  //       this.product = res;
  //     }
  //   )
  // }


  delete() {
  }

  favorite() {
  }

  complete() {
  }

//  getTodoById(id: number) {
//     return this._Todos.getTodoById(id);
//   }
  get favoriteIcon() {
    return this.todos.favorite ? '★' : '☆';
  }

  get completedIcon() {
    return this.todos.completed ? '✔' : '○';
  }
}
