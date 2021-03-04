import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm?: FormGroup;
  firstName?: FormControl;
  lastName?: FormControl;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit(): void {
    this.firstName =  new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName () {
    return this.firstName?.valid || this.firstName?.untouched;
  }

  validateLastName () {
    return this.lastName?.valid || this.lastName?.untouched
  }

  saveProfile(formValues: any){
    if(this.profileForm?.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(()=>{
        this.toastr.success('Profile saved');
      });
    }
  }

  logout() {
    this.authService.logout().subscribe(()=> {
      this.router.navigate(["/user/login"]);
    })
  }

  cancel() {
    this.router.navigate(['events']);
  }


}
