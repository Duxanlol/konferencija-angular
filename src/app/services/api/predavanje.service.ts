import {Injectable, Injector} from '@angular/core';
import {Predavac, Predavanje} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";

@Injectable({
  providedIn: 'root'
})
export class PredavanjeService extends RestService<Predavanje>{
  constructor(injector: Injector) {
    super(Predavanje, 'predavanje', injector );
  }
}
