import { Component, OnInit } from '@angular/core';
import {Projet} from '../../Model/Projet';
import {ProduitService} from '../../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

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
  idprojet;
  ajoute;
  projet;
host="https://mysoleil.herokuapp.com/";
  //host="http://localhost:8080/";
  selectedFile: File;
constructor(private service: ProduitService, private toaster: ToastrService,
              private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.idprojet=this.route.snapshot.params.id;
    if(this.idprojet=='0'){
      this.ajoute=true;
    }
    else{
      this.ajoute=false;
      this.service.recupereProjet(this.idprojet).subscribe(
        data=>{
          this.projet=data;
        },
        err=>{
          console.log("probleme de reseau")
      }

      )

    }
  }

  ajoutSiasir(projet :Projet){
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

    //console.log(projet);
   // this.onUpload(projet);
  }

  ModifierSiasir(projet: any) {
    this.service.modifierProjet(this.idprojet, projet).subscribe(
      data=>{
        console.log("projet modifier avec succéé");
        this.router.navigate(['projets/'+projet.type+'/'+this.admin]);
      },
      err=>{
        console.log("probleme de connexion");
      }
    )
  }



 /* public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload(Projet) {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(this.host+'upload/'+Projet, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            //this.message = 'Image uploaded successfully';
          } else {
            // this.message = 'Image not uploaded successfully';
          }
        }
      );
  }*/
}
