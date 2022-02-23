import { Component, OnInit } from '@angular/core';
import {Login} from '../../Model/Login';
import {ProduitService} from '../../services/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login:'';
 motdepasse='';
 admin: any;
  constructor(private service: ProduitService, private router: Router) { }

  ngOnInit(): void {
  }

  connecter(credentials){
    this.service.recupererLogin().subscribe(
      data=>{
        this.admin=data;

        console.log(this.admin);
        for(let i=0 ; i< this.admin._embedded.admins.length; i++) {
          console.log(this.admin._embedded.admins[i].login);
          if (this.admin._embedded.admins[i].login == credentials.login && this.admin._embedded.admins[i].motdepasse == credentials.motdepasse) {
            console.log(this.admin._embedded.admins[i]);
            localStorage.setItem('token', this.admin._embedded.admins[i].login);
            this.router.navigate(['/ajouteProjet/0']);
          }
        }
      console.log(this.admin)},
      err=>{console.log("probleme reseau")}
    )
  }
}
