import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BoutonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
