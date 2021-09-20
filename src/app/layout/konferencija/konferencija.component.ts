import { Component, OnInit } from '@angular/core';
import {KonferencijeService} from "../../services/api/konferencije.service";
import {Konferencija, Organizator} from "../../model/model";
import {error} from "@angular/compiler/src/util";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-konferencija',
  templateUrl: './konferencija.component.html',
  styleUrls: ['./konferencija.component.css']
})
export class KonferencijaComponent implements OnInit {

  constructor(private konferencijeService: KonferencijeService, public authService: AuthService) { }

  public konferencije: Konferencija[];
  columnsToDisplay = ['naziv', 'opis', 'pocetak', 'kraj', 'organizator'];

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.konferencijeService.getAll()
      .subscribe((konferencije: Konferencija[]) =>{
        this.konferencije = konferencije;
        console.dir(this.konferencije);
        this.getOrganizator();
        //console.dir(this.api);

      });

  }

  getOrganizator() {
    for(let i = 0; i < this.konferencije.length; i++){
      this.konferencije[i].getRelation(Organizator, 'organizator').subscribe(
        (org: Organizator) => this.konferencije[i].organizator = org
    );
    }


  }
}
