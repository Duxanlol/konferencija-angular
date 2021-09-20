import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Izvodjenje, Konferencija, Predavanje} from "../../model/model";
import {PredavanjeService} from "../../services/api/predavanje.service";
import {IzvodjenjeService} from "../../services/api/izvodjenje.service";

@Component({
  selector: 'app-izvodjenje-dodaj',
  templateUrl: './izvodjenje-dodaj.component.html',
  styleUrls: ['./izvodjenje-dodaj.component.css']
})
export class IzvodjenjeDodajComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<IzvodjenjeDodajComponent>,
              private izvodjenjeService: IzvodjenjeService){ }

  ngOnInit(): void {
  }
    public nesto: Izvodjenje[];
  dodajIzvodjenje(form: any){
    let predavanje: Predavanje = this.data.predavanje;
    let konferencija: Konferencija = this.data.konferencija;
    let izvodjenje: Izvodjenje = form.value;
    let iz : Izvodjenje = new Izvodjenje();
    iz.brojMesta = izvodjenje.brojMesta;
    iz.datum = izvodjenje.datum;
    iz.predavanje = predavanje;
    iz.konferencija = konferencija;



    this.izvodjenjeService.create(iz).subscribe( response => {

      console.log(response)
      iz.addRelation('predavanje', iz.predavanje).subscribe(response2 =>{
        console.log("Posle add relation");
        console.log(response2)
        iz.addRelation('konferencija', iz.konferencija).subscribe( response3 =>{
          console.log(response3) });
      });
      predavanje.izvodjenja.push(iz);
      this.dialogRef.close();
    });

    console.log(izvodjenje);


  }

}
