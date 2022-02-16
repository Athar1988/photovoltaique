import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {PresentationComponent} from './presentation/presentation.component';
import {ContactComponent} from './contact/contact.component';
import {ModulesolaireComponent} from './produits/modulesolaire/modulesolaire.component';
import {BatteriesComponent} from './produits/batteries/batteries.component';
import {LampesComponent} from './produits/lampes/lampes.component';
import {OnduleursComponent} from './produits/onduleurs/onduleurs.component';
import {PompesComponent} from './produits/pompes/pompes.component';
import {RegulateurComponent} from './produits/regulateur/regulateur.component';
import {ProjetComponent} from './projets/projet/projet.component';
import {LoginComponent} from './admin/login/login.component';
import {AjouteProjetAdminComponent} from './projets/ajoute-projet-admin/ajoute-projet-admin.component';
import {AithguardGuard} from './aithguard.guard';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path:'' , component:AccueilComponent},
  {path:"accueil" , component:AccueilComponent},
  {path:"presentation" , component:PresentationComponent},




  {path:"produits/modulesolaire" , component:ModulesolaireComponent},
  {path:"produits/batteries" , component:BatteriesComponent},
  {path:"produits/lampes" , component:LampesComponent},
  {path:"produits/onduleurs" , component:OnduleursComponent},
  {path:"produits/pompes" , component:PompesComponent},
  {path:"produits/regulateur" , component:RegulateurComponent},
  {path:"projets/:id" , component:ProjetComponent},


  {path:"contact" , component:ContactComponent},
  {path:"ajouteProjet" ,  canActivate: [AithguardGuard],component:AjouteProjetAdminComponent},
  {path:"admin" , component:LoginComponent},

  {path:"projets/:id/:id2" , component:ProjetComponent},

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
