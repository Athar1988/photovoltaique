import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../services/produit.service';

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {

  constructor(private serviceProduit: ProduitService) { }

  ngOnInit(): void {
  }

  produits(produit: string){
    this.serviceProduit.produits(produit);
  }
}
