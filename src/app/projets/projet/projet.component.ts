import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitService} from '../../services/produit.service';

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
  constructor(private router:Router, private route:ActivatedRoute, private service: ProduitService) { }

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
        console.log(data + " ggggg")
        for(let i=0 ; i< this.tousLesProjet.length; i++) {
          console.log(this.tousLesProjet[i] + " ppppt")
        }
        },
      err=>{console.log("probleme de connexion")}
    )
  }


}
