import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersAuthService {
  // UsersloginService:EventEmitter<any>= new EventEmitter<any>();

  private isAuthenticated: boolean = false;
  private username: string = '';
   isLoggedInn = false;

  email!: string;
  password!: string;
  private users: Users[] = [];
  private loggedInUser:any=null;
  //  isLoggedIn = false;
   private currentUser: string | null = null;

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

    constructor(private http: HttpClient) {   const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = storedUser;
    }

  }

  // login(username: string, password: string): Observable<boolean> {
  //   const user = this.users.find(u => u.username === username && u.password === password);
  //   if (user) {
  //     this.loggedInUser = user;
  //     localStorage.setItem('loggedInUser', JSON.stringify(user));
  //     return of(true);
  //   } else {
  //     return of(false);
  //   }
  // }
//  .subscribe(response => {
//   console.log(response);
// });
  // onSubmitt(email:string,password:string):Observable<any>{
  //   const data = { email: email, password: password };
  //   return this.http.post<any>('https://dummyjson.com/auth/login', data)
  // }


  private baseUrl = 'https://dummyjson.com/auth';


  // login(username: string, password: string) {
  //   const url = `${this.baseUrl}/login`;
  //   const body = { username, password };
  //   // this.isLoggedInn = true;
  //   // this.isLoggedIn = true;
  //   // this.currentUser = username;
  //   return this.http.post(url, body)
  // }
  login(username: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/login`;
    const body = { username, password };
    return this.http.post(url, body).pipe(
      map((response: any) => {
        if (response) {
          this.currentUser = username;
          localStorage.setItem('currentUser', username);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of(false);
      })
    );
  }

  // login(username: string, password: string): Observable<boolean> {
  //   const url = `${this.baseUrl}/login`;
  //   const body = { username, password };
  //   return this.http.post(url, body).pipe(
  //     map((response: any) => {
  //       // const token = response.token;
  //       if (response) {
  //         return this.isLoggedIn = true;
  //         // return this.currentUser = username;
  //         console.log(this.isLoggedIn );

  //          true;
  //       } else {
  //         return false;
  //       }
  //     }),
  //     catchError((error) => {
  //       // Handle any errors that occurred during the login process
  //       console.error('Error during login:', error);
  //       return of(false);
  //     })
  //   );
  // }

  // login(username: string, password: string): Observable<boolean> {
  //   const url = `${this.baseUrl}/login`;
  //   const body = { username, password };
  //   return this.http.post(url, body).pipe(
  //     map((response: any) => {
  //       if (response) {
  //         this.isLoggedIn = true;
  //         this.currentUser = username;
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }),
  //     catchError((error) => {
  //       console.error('Error during login:', error);
  //       return of(false);
  //     })
  //   );
  // }

  register(name: string, email: string, password: string) {
    const url = `https://dummyjson.com/users/add`;
    const body = { name, email, password };
    return this.http.post(url, body);
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

    // logout(): void {
    //   this.loggedInUser = null;
    //   localStorage.removeItem('loggedInUser');
    //   this.isLoggedInn = false;
    //   this.isLoggedIn = false;
    // this.currentUser = '';
    // }

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    }

    // getIsLoggedIn(): Observable<boolean> {
    //   return of(this.isLoggedIn());
    // }

    isLoggedIn(): boolean {
      return this.currentUser !== null;
    }

    getCurrentUser(): string | null {
      return this.currentUser;
    }

    // getCurrentUser(): string {
    //   return this.currentUser;
    // }
    // isLoggedIn(): boolean {
    //   return !!this.loggedInUser;
    // }

    getLoggedInUser(): Users {
      return this.loggedInUser;
    }


    getIsLoggedIn(): Observable<boolean> {
      return of(this.isLoggedIn());
    }

    // getIsLoggedIn() {
    //   return this.isLoggedInn;
    // }
    // isLoggedIn() {
    //   return this.loggedInUser !== null;
    // }

    // getLoggedInUser() {
    //   return this.loggedInUser;
    // }


}
