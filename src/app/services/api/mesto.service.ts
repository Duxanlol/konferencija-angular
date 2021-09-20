import {Injectable, Injector} from '@angular/core';
import {Karta, Mesto, Polaznik} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MestoService extends RestService<Mesto>{
  constructor(injector: Injector) {
    super(Mesto, 'mesto', injector );
  }

  public findAllByKarta(karta: Karta): Observable<Mesto[]> {
    let options: any = {params: [{key: 'karta', value: karta}]};
    return this.search('findAllByKarta', options);
  }

}
