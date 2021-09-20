import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string;
  public email: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(): void{
    this.authService.login({
      username: this.email,
      password: this.password}).subscribe(response => {
      if (response.token == null) {
        alert("Fail.");
      } else {
        alert("Success.");
        this.authService.email = this.email;
        this.authService.getOsoba();
        localStorage.setItem("token", response.token);
        this.router.navigate(["/profil"]);
      }
    }, error => {
      console.log("Auth servis pao!");

    });
  }

}
