import { Component } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent {
  deletedTodos!: Todos[];

  constructor(private todoService: TodosService) {
    this.getDeletedTodos();
   }



  getDeletedTodos() {
     this.deletedTodos = this.todoService.getDeletedTodos();
    console.log(this.deletedTodos);

  }
}
