import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarMessagingService implements OnInit
{

  public navbarSpan: string = "Pocetna";

  ngOnInit(): void {}



  constructor() {
  }


}
