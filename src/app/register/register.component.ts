import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private router: Router,private userService: UsersAuthService,private formBuilder: FormBuilder) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

  }

  // onSubmit(form: NgForm) {
  //   const user: Users = {
  //     id: 1,
  //     username: form.value.username,
  //     name: form.value.name,
  //     password: form.value.password,
  //     img: '',
  //     email: form.value.email,
  //     favoriteQuote: form.value.favoriteQuote
  //   };
  //   this.userService.signUp(user).subscribe(success => {
  //     if (success) {
  //       // Redirect to login page
  //       this.router.navigate(['/login']);

  //     } else {
  //       // Display error message
  //       this.router.navigate(['/login']);
  //     }
  //   });
  // }

  onSubmit() {
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    if (this.registerForm.valid) {
      console.log('Registration successful!');
      console.log(this.registerForm.value);
    }

    this.userService.register(name, email, password).subscribe(
      (result) => {
        console.log('Registered successfully');
        console.log(result);
            this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        console.log('Registration failed');
        this.router.navigate(['/register']);

      }
    );
  }
}
