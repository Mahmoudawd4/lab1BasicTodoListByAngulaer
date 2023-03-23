import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';
import { NgForm } from '@angular/forms';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup;
  email!: string;
  password!: string;
  // data={email:"",password:""}

  name: string='';
  quote: string='';
  // isLoggedIn = false;
   isLoggedInn:boolean = false;

  constructor(private router: Router,private _Auth:UsersAuthService,
    private formBuilder: FormBuilder,
    private authGuard: AuthGuard) {

    // this.loginForm = new FormGroup({
    //   username: new FormControl(null, [Validators.required , Validators.pattern('')]),
    //   password: new FormControl(null, [Validators.required])
    // })




    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });


  }
  // login() {
  //   if (this.name && this.quote) {
  //     this.isLoggedIn = true;
  //     this.router.navigate(['/home']);
  //   }
  // }

  // onLogin() {
  //   if(this._Auth.login(this.name, this.quote))
  //     this.router.navigate(['/home']);
  // }



  // constructor(private http: HttpClient) { }

  // fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({

//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log);


  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this._Auth.login(username, password).subscribe(
      (result) => {
        this.isLoggedInn = true;
        this.authGuard.change();
        if(result)
        this.router.navigate(['/home']);
        console.log('Logged in successfully');

      },
      (error) => {
        this.router.navigate(['/login']);
        console.log('Login failed');

      }
    );


  }



}



  // onSubmit() {
  //   const { email, password } = this.loginForm.value;
  //   this._Auth.onSubmitt(email,password).subscribe(
  //     (res)=>{
  //       this.router.navigate(['/home']);
  //     },
  //     (err) => {
  //       this.router.navigate(['/login']);
  //     }
  //   )
  // }



  // onSubmit() {
  //   const { username, password } = this.loginForm.value;
  //   this._Auth.login(username, password).subscribe(success => {
  //     if (success) {
  //       // Redirect to home page
  //            this.router.navigate(['/home']);
  //     } else {
  //       // Display error message
  //       this.router.navigate(['/login']);

  //     }
  //   });
  // }


