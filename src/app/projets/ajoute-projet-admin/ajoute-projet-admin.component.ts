import { Component, OnInit } from '@angular/core';
import {Projet} from '../../Model/Projet';
import {ProduitService} from '../../services/produit.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ajoute-projet-admin',
  templateUrl: './ajoute-projet-admin.component.html',
  styleUrls: ['./ajoute-projet-admin.component.css']
})
export class AjouteProjetAdminComponent implements OnInit {
    url: any;
    id:'';
    type:'';
    titre:'';
    image:'';
    description:''
    admin=true;
  constructor(private service: ProduitService, private toaster: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ajoutSiasir(projet :Projet){
    projet.image=this.image;
    this.service.ajouterProjet(projet).subscribe(
      data=>{
        console.log("projet ajouter avec succés");
        console.log('projet/'+projet.type+'/'+this.admin);
        this.router.navigate(['projets/'+projet.type+'/'+this.admin]);
        this.toaster.success("Message envoyé avec succé!");

      },
    err=>{
      console.log("Probleme de saisir! essayez une autre fois.");
      this.toaster.error("Probleme de saisir! essayez une autre fois.")
    }
    )
  }


  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0].name);
      this.image=event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log(event.target.files[0]);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      }
    }
  }

}
