import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private  serviceProduit:ProduitService) { }

  ngOnInit(): void {
  }

  produits(produit: string) {
    this.serviceProduit.produits(produit);
  }

}
