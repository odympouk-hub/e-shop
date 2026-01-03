import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginObj: any = {

    username: '',
    passowrd: ''

  };
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(1).subscribe({
      next: (user: User) => {
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onLogin() {
    if (this.loginObj.username == "admin" && this.loginObj.passowrd == "334455") {
      this.router.navigateByUrl('/products')
    } else {
      alert('wrong Credentianls')
    }

  }

}
