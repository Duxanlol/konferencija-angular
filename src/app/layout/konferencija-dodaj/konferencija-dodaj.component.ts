import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KonferencijeService} from "../../services/api/konferencije.service";
import {Form} from "@angular/forms";
import {Konferencija, Organizator, Osoba} from "../../model/model";
import {OrganizatorService} from "../../services/api/organizator.service";
import {Resource} from "@lagoshny/ngx-hal-client";
import {KonferencijaComponent} from "../konferencija/konferencija.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-konferencija-dodaj',
  templateUrl: './konferencija-dodaj.component.html',
  styleUrls: ['./konferencija-dodaj.component.css']
})
export class KonferencijaDodajComponent implements OnInit {

  @Output()
  onAdd: EventEmitter<void> = new EventEmitter();

  constructor(private konferencijeService: KonferencijeService,
              private organizatoriService: OrganizatorService,
              private router: Router)  { }
  public organizatori: Osoba[];
  public organizator: Organizator;
  public selectedItem: any;

  ngOnInit(): void {
    this.getOrganizatori();
  }

  getOrganizatori(){
    this.organizatoriService.getAll().subscribe((organizatori: Organizator[]) =>{
      this.organizatori = <Osoba[]>organizatori;
      console.dir(this.organizatori)
      });
  }

  dodajKonferenciju(form: any):void{
    let konferencija: Konferencija = form.value;
    let ko: Konferencija = new Konferencija();
    ko.naziv = konferencija.naziv;
    ko.opis = konferencija.opis;
    ko.pocetak = konferencija.pocetak;
    ko.kraj = konferencija.kraj;
    ko.cena = konferencija.cena;

    ko.organizator = this.selectedItem;
    console.log("SLEDI KONFERENCIJA");
    console.dir(ko);
    console.log("SLEDI LINKS");



    this.konferencijeService.create(ko).subscribe( response => {
      console.log(response);
      ko.addRelation('organizator', ko.organizator).subscribe( response => {
        console.log(response)
        alert("Upsesno dodato.");
        setTimeout(() =>
          {
            this.router.navigate(["/konferencija"]);
          },
          1000);
      });
    })
  }
}
