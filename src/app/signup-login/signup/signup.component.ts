import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/model/User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: User[] = [];
  firstName: String = '';
  lastName: String = '';
  email: String = '';
  password: String = '';
  message: String = '';
  showMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  signUp(userForm: NgForm){
    if(this.validateSignUp()){
      this.users.push(new User(this.firstName, this.lastName, this.email, this.password));
      this.message = 'Signup successful';
    } else {
      this.message = 'Invalid email or password';
    }
    userForm.reset();
    this.showMessage = true;
  }

  validateSignUp(){
    return this.email.includes('@') && this.email.includes('.') &&
      this.password.length >= 8;
  }

}
