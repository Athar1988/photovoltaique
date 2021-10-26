import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
token;
  constructor(private router: Router, public serviceProduit: ProduitService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
  }


  produits(produit: string) {
    this.serviceProduit.produits(produit);
  }

  Projets(projet: string) {
    this.serviceProduit.projets(projet);
  }

  logout(): void {
    this.serviceProduit.logout();
    this.router.navigate(['admin']);
  }
}
