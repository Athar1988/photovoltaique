import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../../services/produit.service';
import {HttpClient} from '@angular/common/http';
import {Projet} from '../../Model/Projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  type:any;
  id:any;
  public token;
  listeProjet: any;

  host="https://mysoleil.herokuapp.com/";
  //host="http://localhost:8080/";
  selectedFile: File;

  constructor(private router:Router, private route:ActivatedRoute, private service: ProduitService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.affichageProjet();
  }

  private affichageProjet() {
    this.type = this.route.params.subscribe(params => {
        this.id=params['id'];
      },
      err=>{
        console.log("probleme d'affcihage");
      });
    /* recupere token si existe*/
    this.token=localStorage.getItem('token');
    /****/
    this.service.afficheProjet(this.id).subscribe(
      data=> {
        this.listeProjet=data;
        },
      err=>{console.log("probleme de connexion")}
    )
  }


  supprimerProjet(projet) {
    this.service.supprimerProjet(projet).subscribe((s) => {
      console.log("projet supprimer avec succé");
    });
  }


  //Gets called when the user selects an image
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



  //Gets called when the user clicks on submit to upload the image
  onUpload(idProjet) {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(this.host+'upload/'+idProjet, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            //this.message = 'Image uploaded successfully';
          } else {
            // this.message = 'Image not uploaded successfully';
          }
        }
      );
    location.reload();
  }


}
