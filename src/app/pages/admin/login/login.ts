import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { Test } from "../../../test/test";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, Test],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {

    username: '',
    password: ''

  };
  constructor(private router: Router, private userService: UserService) { }



  onLogin() {
    this.userService.getUser(this.loginObj.username, this.loginObj.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/products');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }



}
