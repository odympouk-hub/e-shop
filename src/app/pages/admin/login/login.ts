import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {

    username: '',
    passowrd: ''

  };
constructor(private router:Router){}





  onLogin(){
    if(this.loginObj.username == "admin" && this.loginObj.passowrd == "334455"){
this.router.navigateByUrl('/products')
    }else{
      alert('wrong Credentianls')
    }

  }

}
