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
  tousLesProjet: any;


  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;



  constructor(private router:Router, private route:ActivatedRoute, private service: ProduitService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.affichageProjet();
  }

  private affichageProjet() {
    this.type = this.route.params.subscribe(params => {
        this.id=params['id'];
        console.log(this.id+" id");
      },
      err=>{
        console.log("probleme d'affcihage");
      });
    /* recupere token si existe*/
    this.token=localStorage.getItem('token');
    /****/
    this.service.afficheProjet(this.id).subscribe(
      data=> {
        console.log(data+ "liste projet")
        this.listeProjet=data;
        this.tousLesProjet=this.listeProjet._embedded.projets;
        for(let i=0 ; i< this.tousLesProjet.length; i++) {
          console.log(this.tousLesProjet[i] + " ppppt")
        }
        },
      err=>{console.log("probleme de connexion")}
    )
  }


  supprimerProjet(projet) {
    console.log(projet.id);
    this.service.supprimerProjet(projet).subscribe((s) => {
      console.log(s);
    });
  }

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload(id) {
    console.log(id+" rrrrr");
    console.log(this.selectedFile.name);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    console.log("modoficaton");
    this.httpClient.post('https://mysoleil.herokuapp.com/imageModels'+id, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
    this.getImage(id+".jpg");
  }
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage(imageName) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('https://mysoleil.herokuapp.com/get' + imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
