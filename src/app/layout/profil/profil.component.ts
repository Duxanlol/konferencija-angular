import {Component, OnInit} from '@angular/core';
import {Izvodjenje, Karta, Konferencija, Mesto, Organizator, Osoba, Polaznik, Predavanje} from "../../model/model";
import {KartaService} from "../../services/api/karta.service";
import {AuthService} from "../../services/auth/auth.service";
import {MestoService} from "../../services/api/mesto.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private kartaService: KartaService,
              private authService: AuthService,
              private mestoService: MestoService) {
  }

  public karte: Karta[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  printKarte(){
    console.log(this.karte);
  }

  loadAll() {
    //Nije radilo pa vucem sve :(
    this.kartaService.getAll().subscribe((karte: Karta[]) => {
      let karteSve: Karta[] = karte;
      console.log("sve karte");
      console.log(karteSve);
      for (let kar of karteSve) {
        kar.getRelation(Osoba, 'polaznik').subscribe((pol: Polaznik) => {
          kar.polaznik = pol;
          console.log(kar)
          if (kar.polaznik.id == this.authService.getOsoba().id) {
            console.log("JESAM!!!")
            console.log(kar);
            this.mestoService.findAllByKarta(kar).subscribe((mesta: Mesto[]) =>{
              kar.mesta = mesta;
              for (let mes of mesta){
                mes.getRelation(Izvodjenje, 'izvodjenje').subscribe((izvodjenje: Izvodjenje) => {
                  mes.izvodjenje = izvodjenje;
                  izvodjenje.getRelation(Konferencija, 'konferencija').subscribe( (konf : Konferencija) =>{
                    izvodjenje.konferencija = konf;
                    kar.konferencija = konf;
                  });
                  izvodjenje.getRelation(Predavanje, 'predavanje').subscribe( (predavanje : Predavanje) =>{
                    izvodjenje.predavanje = predavanje;
                  });
                });
              }
            })

            this.karte.push(kar);
          }
        })
      }
    })
  }
}
