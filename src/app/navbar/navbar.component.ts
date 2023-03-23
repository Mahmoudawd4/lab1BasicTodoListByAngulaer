import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  currentUser: string='';

  constructor(private authService: UsersAuthService,private _Todos:TodosService, private router: Router) { }
  // favoritesCount = 2;
  // deletedCount = 1;
  // completedPercentage = 60;

  // ngOnInit(): void {
  //   this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
  //     this.isLoggedIn = isLoggedIn;
  //     this.currentUser = this.authService.getCurrentUser();
  //     console.log( this.isLoggedIn);
  //     console.log( this.currentUser);

  //   });
  // }


  // ngOnInit(): void {
  //   this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
  //     this.isLoggedIn = isLoggedIn;
  //     this.currentUser = this.authService.getCurrentUser();
  //   });
  // }


  // ngOnInit(): void {
  //   // this.isLoggedIn = this.authService.isLoggedIn;
  //   // this.currentUser = this.authService.getCurrentUser();
  // }

  // ngOnInit(): void {
    // this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
    //   this.isLoggedIn = isLoggedIn;
    //   console.log(isLoggedIn);
    // a  console.log(this.isLoggedIn);
    //   this.currentUser = this.authService.getCurrentUser();
    // });
  // }

  // ngOnInit(): void {
    // this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
    //   this.isLoggedIn = isLoggedIn;
    //   if(isLoggedIn){
    //     this.currentUser!= this.authService.getCurrentUser();
        // this.userName = this.currentUser.name; // assuming that the user object has a name property
        // this.userImage = this.currentUser.image; // assuming that the user object has an image property
      // }
    // });

    // this.currentUser!= localStorage.getItem('currentUser');

  // }

  ngOnInit(): void {
    this.getCurrentUser();
    this.onLogout()
  }

  getCurrentUser(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = user;
    }
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
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
