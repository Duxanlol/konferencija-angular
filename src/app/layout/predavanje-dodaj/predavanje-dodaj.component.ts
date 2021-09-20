import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {KonferencijeService} from "../../services/api/konferencije.service";
import {OrganizatorService} from "../../services/api/organizator.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Konferencija, Organizator, Osoba, Predavac, Predavanje} from "../../model/model";
import {PredavacService} from "../../services/api/predavac.service";
import {PredavanjeService} from "../../services/api/predavanje.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {KonferencijaComponent} from "../konferencija/konferencija.component";

@Component({
  selector: 'app-predavanje-dodaj',
  templateUrl: './predavanje-dodaj.component.html',
  styleUrls: ['./predavanje-dodaj.component.css']
})
export class PredavanjeDodajComponent implements OnInit {

  @Output()
  onAdd: EventEmitter<void> = new EventEmitter();

  constructor(private konferencijeService: KonferencijeService,
              private predavacService: PredavacService,
              private predavanjeService: PredavanjeService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<PredavanjeDodajComponent>){ }

  public predavaci: Osoba[];
  public predavac: Predavac;
  public selectedItem: any;
  private konferencijaId : string | null;
  ngOnInit(): void {
    this.getPredavaci();
  }

  getPredavaci(){
    this.predavacService.getAll().subscribe((predavaci: Predavac[]) =>{
      this.predavaci = <Osoba[]>predavaci;
      console.dir(this.predavaci)
    });
  }

  dodajPredavanje(form: any):void{
    let predavanje: Predavanje = form.value;
    let pr: Predavanje = new Predavanje();
    console.log(predavanje);
    pr.predavac = this.selectedItem;
    pr.naziv = predavanje.naziv;
    pr.opis = predavanje.opis;

    let konferencija:  Konferencija = this.data.konferencija;
    pr.konferencija = konferencija

    this.predavanjeService.create(pr).subscribe( response1 => {
      console.log(response1)
      konferencija.predavanja.push(pr);
      this.dialogRef.close();
    });
  }
}
