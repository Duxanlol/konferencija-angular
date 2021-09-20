import {Injectable, Injector} from '@angular/core';
import {Izvodjenje} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";

@Injectable({
  providedIn: 'root'
})
export class IzvodjenjeService extends RestService<Izvodjenje>{
  constructor(injector: Injector) {
    super(Izvodjenje, 'izvodjenje', injector );
  }
}
