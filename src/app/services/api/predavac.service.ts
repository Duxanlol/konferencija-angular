import {Injectable, Injector} from '@angular/core';
import  {Predavac} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";

@Injectable({
  providedIn: 'root'
})
export class PredavacService extends RestService<Predavac>{
  constructor(injector: Injector) {
    super(Predavac, 'predavac', injector );
  }
}
