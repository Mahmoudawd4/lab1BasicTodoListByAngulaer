import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersAuthService {

  private isAuthenticated: boolean = false;
  private username: string = '';


  private users: Users[] = [];
  private loggedInUser:any=null;


    // private users = [
    //   { id: 1, name: 'mahmoud', favoriteQuote: 'php' },
    //   { id: 2, name: 'islam', favoriteQuote: 'sql' },
    //   { id: 3, name: 'khaled', favoriteQuote: 'node' },
    // ];

    // private users = [
    //   { id: 1, name: 'mahmoud', favoriteQuote: 'sql', username: 'mahmoud', password: '123' },
    //   { id: 2, name: 'islam', favoriteQuote: 'node', username: 'islam', password: '123' }
    // ];

    // private loggedInUser: any = null;

    constructor() {   const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return of(true);
    } else {
      return of(false);
    }
  }



    // login(name: string,favoriteQuote: string) {
    //   const user = this.users.find(u => u.name === name && u.favoriteQuote === favoriteQuote);

    //   if (user) {
    //     this.loggedInUser = user;
    //     return true;
    //   } else {
    //     return false;
    //     console.log('error users auth ');

    //   }
    // }

    // login(username: string, password: string) {
    //   // Check if user with given username and password exists in the users array
    //   const user = this.users.find(u => u.username === username && u.password === password);

    //   if (user) {
    //     // Store user information in local storage
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

  //  logout() {
  //     this.loggedInUser = null;
  //   }

  signUp(user: Users): Observable<boolean> {
    const existingUser = this.users.find(u => u.username === user.username);
    if (existingUser) {
      return of(false);
    } else {
      user.id = this.users.length + 1;
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      return of(true);
    }
  }

    logout(): void {
      this.loggedInUser = null;
      localStorage.removeItem('loggedInUser');
    }

    isLoggedIn(): boolean {
      return !!this.loggedInUser;
    }

    getLoggedInUser(): Users {
      return this.loggedInUser;
    }
    // isLoggedIn() {
    //   return this.loggedInUser !== null;
    // }

    // getLoggedInUser() {
    //   return this.loggedInUser;
    // }


}
