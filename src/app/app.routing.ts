import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./layout/login/login.component";
import {RegisterComponent} from "./layout/register/register.component";
import {KonferencijaComponent} from "./layout/konferencija/konferencija.component";
import {KonferencijaDetailsComponent} from "./layout/konferencija-details/konferencija-details.component";
import {KonferencijaDodajComponent} from "./layout/konferencija-dodaj/konferencija-dodaj.component";
import {ProfilComponent} from "./layout/profil/profil.component";
import {AuthGuard} from "./guard/AuthGuard";
import {Konferencija} from "./model/model";

const routes: Routes = [

  {
    path: "",
    redirectTo: "konferencija",
    pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "konferencija",
    component: KonferencijaComponent,
  },
  {
    path: "dodaj-konferenciju",
    component: KonferencijaDodajComponent,
  },
  {
    path: "konferencija/:id",
    component: KonferencijaDetailsComponent,
  },
  {
    path: "profil",
    component: ProfilComponent,
    canActivate: [AuthGuard]
  },
];

export const RoutingModule = RouterModule.forRoot(routes);
