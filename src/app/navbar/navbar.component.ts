import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: UsersAuthService,private _Todos:TodosService) { }
  // favoritesCount = 2;
  // deletedCount = 1;
  // completedPercentage = 60;

  ngOnInit(): void {
    // this.currentUser = this.authService.getCurrentUser();
  }

  onLogout(): void {
    this.authService.logout();
  }
  favoritesCount():any{
    return this._Todos.favoritesCount()
    // console.log();
  }

  completedPercentage():any{
    return this._Todos.completedPercentage()
    // console.log();
  }

  deletedCount():any{
    return this._Todos.deletedCount()
  }

  getAllFavoriteTodos(){
    this._Todos.getAllFavoriteTodos()
  }


}
