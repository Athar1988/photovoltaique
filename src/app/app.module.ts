import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { ModulesolaireComponent } from './produits/modulesolaire/modulesolaire.component';
import { OnduleursComponent } from './produits/onduleurs/onduleurs.component';
import { RegulateurComponent } from './produits/regulateur/regulateur.component';
import { PompesComponent } from './produits/pompes/pompes.component';
import { LampesComponent } from './produits/lampes/lampes.component';
import { ProduitsComponent } from './produits/produits.component';
import { BatteriesComponent } from './produits/batteries/batteries.component';
import { BoutonsComponent } from './produits/boutons/boutons.component';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { ProjetComponent } from './projets/projet/projet.component';
import { AjouteProjetAdminComponent } from './projets/ajoute-projet-admin/ajoute-projet-admin.component';
import { LoginComponent } from './admin/login/login.component';
import {NgSelect2Module} from 'ng-select2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailprojetComponent } from './projets/detailprojet/detailprojet.component';
import { Nf404Component } from './nf404/nf404.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    PresentationComponent,
    ContactComponent,
    ModulesolaireComponent,
    OnduleursComponent,
    RegulateurComponent,
    PompesComponent,
    LampesComponent,
    ProduitsComponent,
    BatteriesComponent,
    BoutonsComponent,
    ProjetComponent,
    AjouteProjetAdminComponent,
    LoginComponent,
    DetailprojetComponent,
    Nf404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgSelect2Module,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
