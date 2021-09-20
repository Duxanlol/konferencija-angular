import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Osoba} from "../../model/model";
import {Router} from "@angular/router";
import {OsobaService} from "../api/osoba.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public email: string = "";
  public osoba: Osoba;
  constructor(private httpClient: HttpClient, private router: Router, private osobaService: OsobaService) { }

  login(loginInfo: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/login", {
      username: loginInfo.username,
      password: loginInfo.password
    });
  }

  getOsoba(){
    if (localStorage.getItem("osoba") == undefined){
      this.osobaService.findByEmail(this.email).subscribe( (osoba : Osoba) =>{
        localStorage.setItem("osoba",JSON.stringify(osoba));
        console.log(osoba);
        return this.osoba

      })
    }

    return <Osoba>JSON.parse(<string>localStorage.getItem("osoba"));
  }

  register(osoba: Osoba): Observable<boolean> {
    return this.httpClient.post<boolean>( "http://localhost:3000/register", osoba);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  isAdmin(){
    return localStorage.getItem("token") == "ADMIN";
  }

  isUser(){
    return localStorage.getItem("token") == "USER";
  }

  isLoggedIn(){
    return localStorage.getItem("token") != null;
  }

}
