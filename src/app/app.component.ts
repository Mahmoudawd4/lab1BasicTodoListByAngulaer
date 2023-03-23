import { Component } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { UsersAuthService } from './users-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab1';
  // isLoggedIn: boolean = false;
  // currentUser:string=localStorage.getItem('currentUser')!;

  loggedIn = false;

  constructor(private authService: UsersAuthService,private authGuard: AuthGuard) {
    // this.isLoggedIn = this.authService.getIsLoggedIn();
    // console.log( this.isLoggedIn);
    // this.currentUser=localStorage.getItem('currentUser')!;
  }

  ngOnInit() {
    this.authGuard.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });

  }

}
