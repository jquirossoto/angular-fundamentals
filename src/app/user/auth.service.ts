import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser?: IUser;

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    return this.http.post("/api/login", { "username": userName, "password": password }, {headers: new HttpHeaders( { "Content-Type": "application/json" } )})
      .pipe(tap(data => {
        this.currentUser = <IUser>(data as any)["user"];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get("/api/currentIdentity")
      .pipe(tap(data => {
        console.log('data', data);
        if(data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser!.firstName = firstName;
    this.currentUser!.lastName = lastName;
    return this.http.put(`/api/users/${this.currentUser?.id}`, this.currentUser, {headers: new HttpHeaders( {"Content-Type": "application/json"} ) });
  }

  logout(): Observable<any>{
    return this.http.post("/api/logout", {}, {headers: new HttpHeaders({"Content-Type": "application/json"})});
    this.currentUser = undefined;
  }

}
