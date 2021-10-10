import { Component, OnInit } from '@angular/core';
import {User} from "../shared/model/User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  users: User[] = [];
  firstName: String = '';
  lastName: String = '';
  email: String = '';
  password: String = '';
  message: String = '';
  showMessage: boolean = false;
  loginEmail: String = '';
  loginPassword: String = '';

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

  logIn(userForm: NgForm){
    this.message = this.validateLogIn() ? 'Login successful' : 'Invalid email or password';
    this.showMessage = true;
    userForm.reset();
  }

  validateLogIn(){
    let result = false;

    this.users.forEach(value => {
      if (value.email === this.loginEmail && value.password === this.loginPassword) {
        result = true;
    }
    });

    return result;
  }
}

