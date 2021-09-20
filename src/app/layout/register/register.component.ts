import { Component, OnInit } from '@angular/core';
import {Osoba} from "../../model/model";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  osoba: Osoba = new Osoba();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    console.log(this.osoba);
    this.authService.register(this.osoba).subscribe(response => {
      if (response == true) {
        console.log("You have successfully registered.");
        this.router.navigate(["login"]);
      } else {
        console.log("Email already in use.");
      }}, error => {
      console.log("Authentication service is not available, please try again later.");
    });
  }

}
