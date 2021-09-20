import {Component, OnInit} from '@angular/core';
import {KonferencijeService} from "../../services/api/konferencije.service";
import {Izvodjenje, Karta, Konferencija, Mesto, Organizator, Osoba, Predavac, Predavanje} from "../../model/model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {PredavanjeDodajComponent} from "../predavanje-dodaj/predavanje-dodaj.component";
import {MatDialog} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {PredavanjeService} from "../../services/api/predavanje.service";
import {IzvodjenjeDodajComponent} from "../izvodjenje-dodaj/izvodjenje-dodaj.component";
import {IzvodjenjeService} from "../../services/api/izvodjenje.service";
import {NgForm} from "@angular/forms";
import {KartaService} from "../../services/api/karta.service";
import {MestoService} from "../../services/api/mesto.service";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
import {OsobaService} from "../../services/api/osoba.service";

@Component({
  selector: 'app-konferencija-details',
  templateUrl: './konferencija-details.component.html',
  styleUrls: ['./konferencija-details.component.css']
})
export class KonferencijaDetailsComponent implements OnInit {
  konferencija: Konferencija;
  columnsToDisplay = ['naziv', 'opis', 'pocetak', 'kraj', 'organizator'];
  private _entityId: any;
  private izabrani: Izvodjenje[];
  private izabraniCount: number = -1;
  public currentIzabrani: number = -1;

  constructor(
    private router: Router,
    private konferencijeService: KonferencijeService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public dialog: MatDialog,
    public izvodjenjeService: IzvodjenjeService,
    public predavanjeService: PredavanjeService,
    public kartaService : KartaService,
    public mestoService : MestoService,
    public osobaService : OsobaService,
  ) {
  }

  ngOnInit(): void {
    this.loadAll();
  }

  dodajPredavanje() {
    let dialogRef = this.dialog.open(PredavanjeDodajComponent, {
      height: '500px',
      width: '400px',
      data: {
        konferencija: this.konferencija
      }
    });
  }

  dodajIzvodjenje(predavanje: Predavanje) {
    let dialogRef = this.dialog.open(IzvodjenjeDodajComponent, {
      height: '500px',
      width: '400px',
      data: {
        predavanje: predavanje,
        konferencija: this.konferencija,
      }
    });
  }

  obrisiKonferenciju() {
    this.konferencijeService.delete(this.konferencija).subscribe(response => {
      console.log(response);
      alert("Upsesno obrisano.");

      setTimeout(() => {
          this.router.navigate(["/konferencija"]);
        },
        1000);
    })
  }

  loadAll() {
    this._entityId = this.route.snapshot.paramMap.get('id');
    console.log(this._entityId)
    this.konferencijeService.get(this._entityId).subscribe(
      (konf: Konferencija) => {
        this.konferencija = konf;
        this.konferencija.getRelation(Organizator, 'organizator').subscribe(
          (org: Organizator) => this.konferencija.organizator = org)
        this.konferencija.getRelationArray(Predavanje, 'predavanja').subscribe(
          (predavanja: Predavanje[]) => {
            this.konferencija.predavanja = predavanja
            for (let i = 0; i < this.konferencija.predavanja.length; i++) {
              this.konferencija.predavanja[i].getRelationArray(Izvodjenje, 'izvodjenja').subscribe(
                (izvodjenja: Izvodjenje[]) => this.konferencija.predavanja[i].izvodjenja = izvodjenja
              );
            }
            for (let i = 0; i < this.konferencija.predavanja.length; i++) {
              this.konferencija.predavanja[i].getRelation(Osoba, 'predavac').subscribe(
                (predavac: Osoba) => this.konferencija.predavanja[i].predavac = <Predavac>predavac
              );
            }
          }
        );
        console.log(this.konferencija);
      }
    );
  }

  obrisiPredavanje(predavanje: Predavanje) {
    console.log(predavanje);
    this.predavanjeService.delete(predavanje).subscribe(response => {
      console.log(response);
    });
    let idToDelete: number;
    idToDelete = -1;
    for (let pr of this.konferencija.predavanja) {
      if (pr.id == predavanje.id) {
        idToDelete = this.konferencija.predavanja.indexOf(pr);
      }
    }
    if (idToDelete > -1) {
      this.konferencija.predavanja.splice(idToDelete, 1);
    }
  }
  obrisiIzvodjenje(izvodjenje: Izvodjenje, predavanje: Predavanje) {
    console.log(izvodjenje);
    this.izvodjenjeService.delete(izvodjenje).subscribe(response => {
      console.log(response);
      console.log("PREDAVANJE PRE");
      console.log(predavanje);
      let idToDelete: number;
      idToDelete = -1;
      for (let iz of predavanje.izvodjenja) {
        if (iz.id == izvodjenje.id) {
          idToDelete = predavanje.izvodjenja.indexOf(iz);
        }
      }
      if (idToDelete > -1) {
        predavanje.izvodjenja.splice(idToDelete, 1);
      }
      console.log(predavanje);
      console.log("POSLE")
    });


  }

  rezervisi(form: NgForm) {
    let izvodjenja: Izvodjenje[] = <Izvodjenje[]> form.value;
    let karta: Karta = new Karta();
    let mesta: Mesto[] = [];
    for(let izvod of Object.values(izvodjenja)){
      let tempMesto = new Mesto();
      tempMesto.izvodjenje = izvod;
      tempMesto.karta = karta;
      mesta.push(tempMesto);
    }
    console.log(mesta);

    karta.konferencija = this.konferencija;
    karta.cena = this.konferencija.cena;
    karta.polaznik = this.authService.getOsoba();
    console.log(karta);
    this.kartaService.create(karta).subscribe( response =>{
      console.log(response);
      for(let me of mesta){
        this.mestoService.create(me).subscribe( response =>{
          console.log(response)
        })
      }
      alert("Upsesno rezervisano.");

      setTimeout(() => {
          this.router.navigate(["/profil"]);
        },
        1000);
    })

  }
  onItemChange(value: any, name: string) {
    console.log(" Value is : ", value, " Name is : ", name);
  }

}
