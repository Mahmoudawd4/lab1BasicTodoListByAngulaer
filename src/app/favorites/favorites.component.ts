import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteTodos!: Todos[]

  constructor(private _router:Router,private _Todos:TodosService) {
    this.getAllFavoriteTodos();
  }


  getAllFavoriteTodos() {
  this.favoriteTodos= this._Todos.getAllFavoriteTodos()
  }


}
