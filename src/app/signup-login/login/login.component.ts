import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/model/User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  message: String = '';
  showMessage: boolean = false;
  loginEmail: String = '';
  loginPassword: String = '';

  constructor() { }

  ngOnInit(): void {
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
