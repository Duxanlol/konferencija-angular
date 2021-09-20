import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Konferencija} from "../../model/model";
import {RestService} from "@lagoshny/ngx-hal-client";

@Injectable({
  providedIn: 'root'
})
export class KonferencijeService extends RestService<Konferencija>{
  constructor(injector: Injector) {
    super(Konferencija, 'konferencija', injector );
  }
}

