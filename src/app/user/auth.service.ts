import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser?: IUser;

  constructor() { }

  login(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'jpapa',
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser!.firstName = firstName;
    this.currentUser!.lastName = lastName;
  }

}
