import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Accueil() {
    this.router.navigate(['/accueil']);
  }

  Presentation(){
    this.router.navigate(['/presentation']);
  }

  Produits() {
    this.router.navigate(['/produits']);

  }

  Contact() {
    this.router.navigate(['/contact']);

  }

  photovoltaique() {

  }

  onduleurs() {

  }

  regulateur() {

  }

  produits(produit: string) {
    this.router.navigate(['/produits/'+produit]);
  }
}
