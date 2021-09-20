import {Injectable, Injector} from '@angular/core';
import {Osoba} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OsobaService extends RestService<Osoba>{
  constructor(injector: Injector) {
    super(Osoba, 'osoba', injector );
  }

  public findByEmail(email: string): Observable<Osoba> {
    let options: any = {params: [{key: 'email', value: email}]};
    return this.searchSingle('findByEmail', options);
  }
}
