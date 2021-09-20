import {Injectable, Injector} from '@angular/core';
import {Organizator} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";

@Injectable({
  providedIn: 'root'
})
export class OrganizatorService extends RestService<Organizator>{
  constructor(injector: Injector) {
    super(Organizator, 'organizator', injector );
  }
}
