import {Injectable, Injector} from '@angular/core';
import {Karta, Osoba, Polaznik} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KartaService extends RestService<Karta>{
  constructor(injector: Injector) {
    super(Karta, 'karta', injector );
  }

  public findByOsoba(polaznik: Polaznik): Observable<Karta[]> {
    let options: any = {params: [{key: 'polaznik', value: polaznik}]};
    return this.search('findAllByPolaznik', options);
  }
}
