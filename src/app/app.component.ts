import { Component } from '@angular/core';
import { UsersAuthService } from './users-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  // isLoggedIn: boolean = false;

  constructor(private authService: UsersAuthService) {
    // this.isLoggedIn = this.authService.getIsLoggedIn();
    // console.log( this.isLoggedIn);
  }
}
