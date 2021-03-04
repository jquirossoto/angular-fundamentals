import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    console.log("on init");
    this.authService.checkAuthenticationStatus();
  }

}
