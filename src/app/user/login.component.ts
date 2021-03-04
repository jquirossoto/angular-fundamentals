import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInvalid: boolean = false;
  userName?: string;
  password?: string;
  mouseOverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(formValues:any) {
    this.authService.login(formValues.userName, formValues.password).subscribe((response:any) => {
      if(!response) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      }
    });
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
