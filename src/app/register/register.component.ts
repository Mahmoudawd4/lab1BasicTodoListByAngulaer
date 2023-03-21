import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersAuthService } from '../users-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router,private userService: UsersAuthService) {}

  onSubmit(form: NgForm) {
    const user: Users = {
      id: 1,
      username: form.value.username,
      name: form.value.name,
      password: form.value.password,
      img: '',
      email: form.value.email,
      favoriteQuote: form.value.favoriteQuote
    };
    this.userService.signUp(user).subscribe(success => {
      if (success) {
        // Redirect to login page
        this.router.navigate(['/login']);

      } else {
        // Display error message
        this.router.navigate(['/login']);
      }
    });
  }
}
