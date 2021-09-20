import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {KonferencijeService} from "./services/api/konferencije.service";
import {NgxHalClientModule} from "@lagoshny/ngx-hal-client";
import {ExternalConfigurationService} from "./services/externalConfigurationService/external-configuration-service.service";
import {MainInterceptor} from "./services/interceptor/main.Interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RoutingModule} from "./app.routing";
import { RegisterComponent } from './layout/register/register.component';
import {AuthService} from "./services/auth/auth.service";
import { KonferencijaComponent } from './layout/konferencija/konferencija.component';
import {MatTableModule} from "@angular/material/table";
import { KonferencijaDetailsComponent } from './layout/konferencija-details/konferencija-details.component';
import {NavbarMessagingService} from "./services/navbar/navbar-messaging.service";
import { KonferencijaDodajComponent } from './layout/konferencija-dodaj/konferencija-dodaj.component';
import {MatSelectModule} from "@angular/material/select";
import { PredavanjeDodajComponent } from './layout/predavanje-dodaj/predavanje-dodaj.component';
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { IzvodjenjeDodajComponent } from './layout/izvodjenje-dodaj/izvodjenje-dodaj.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { ProfilComponent } from './layout/profil/profil.component';




@NgModule({
  declarations: [
    AppComponent,
    KonferencijaComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    KonferencijaComponent,
    KonferencijaDetailsComponent,
    KonferencijaDodajComponent,
    PredavanjeDodajComponent,
    IzvodjenjeDodajComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    NgxHalClientModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,

  ],
  providers: [
    KonferencijeService,
    AuthService,
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService},
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    NavbarMessagingService,
    MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
