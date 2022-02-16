import { Component, OnInit } from '@angular/core';
import {Contact} from '../Model/Contact';
import {ProduitService} from '../services/produit.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nom='';
  message='';
  objet='';
  email='';
  constructor(private service: ProduitService,
              private toaster: ToastrService,
               private router: Router) { }

  ngOnInit(): void {
  }


  ajoutContact(contact: Contact) {
    this.service.ajouterContact(contact).subscribe(
    data=>{
      console.log("contact ajouter avec succés");
      this.toaster.success("Message envoyé avec succé!");
      this.router.navigate(['accueil']);
       },

    err=>{
      console.log("Probleme de saisir! essayez une autre fois.");
      this.toaster.error("Probleme de saisir! essayez une autre fois.")
    }
)

  }
}
