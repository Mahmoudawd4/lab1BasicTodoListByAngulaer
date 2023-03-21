import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup;

  name: string='';
  quote: string='';
  isLoggedIn = false;

  constructor(private router: Router,private _Auth:UsersAuthService,private formBuilder: FormBuilder ) {

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

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this._Auth.login(username, password).subscribe(success => {
      if (success) {
        // Redirect to home page
             this.router.navigate(['/home']);
      } else {
        // Display error message
        this.router.navigate(['/login']);

      }
    });
  }

}
