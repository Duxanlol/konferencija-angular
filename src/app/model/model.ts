// Generated using typescript-generator version 2.0.400 on 2021-09-20 23:20:17.


import {Resource} from '@lagoshny/ngx-hal-client';

export class Karta extends Resource {
  id: number;
  konferencija: Konferencija;
  polaznik: Polaznik;
  soba: Soba;
  mesta: Mesto[];
  cena: number;
}

export class Konferencija extends Resource {
  id: number;
  izvodjenja: Izvodjenje[];
  predavanja: Predavanje[];
  naziv: string;
  opis: string;
  cena: number;
  pocetak: Date;
  kraj: Date;
  organizator: Organizator;
  organizator_id: number;
}



export interface Soba extends Resource {
  id: number;
  smestaj: Smestaj;
  brojKreveta: number;
  brojSobe: string;
  cena: number;
}

export class Mesto extends Resource {
  id: number;
  izvodjenje: Izvodjenje;
  karta: Karta;
}

export class Izvodjenje extends Resource {
  id: number;
  datum: Date;
  brojMesta: number;
  mesta: Mesto[];
  time: Date;
  date: Date;
  predavanje: Predavanje;
  konferencija: Konferencija;
}

export class Predavanje extends Resource{
  id: number;
  naziv: string;
  opis: string;
  predavac: Predavac;
  konferencija: Konferencija;
  izvodjenja: Izvodjenje[];
}

export interface Placanje extends Resource{
  id: number;
}

export interface Primanje extends Resource {
  id: number;
}

export class Osoba extends Resource{
  id: number;
  email: string;
  ime: string;
  prezime: string;
  password: string;
  imePrezime: string;
  placanje: Placanje;
  primanje: Primanje;
}

export class Polaznik extends Osoba {
}

export interface Smestaj extends Resource {
  id: number;
  naziv: string;
  sobe: Soba[];
  predstavnik: PredstavnikSmestaja;
}

export class Predavac extends Resource {
  imePrezime: String;
}

export class Organizator extends Resource{
  id: number;
}

export interface PredstavnikSmestaja extends Osoba, Resource {
  smestaj: Smestaj;
}

