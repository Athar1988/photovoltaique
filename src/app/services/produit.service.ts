import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../Model/Contact';
import {Observable} from 'rxjs';
import {Projet} from '../Model/Projet';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private router: Router, private http: HttpClient) { }


  produits(produit: string) {
    this.router.navigate(['/produits/'+produit]);
  }


  projets(projet: string) {
    console.log(projet);
    this.router.navigate(['/projets/'+projet]);
    console.log('/projets/'+projet);
  }


  ajouterContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.http.post<Contact>("http://localhost:8081/contacts", contact);
  }



  ajouterProjet(projet: Projet): Observable<Contact> {
    console.log(projet);
    return this.http.post<Contact>("http://localhost:8081/projets", projet);
  }



  recupererLogin(){
    return this.http.get("http://localhost:8081/admins");
  }

  afficheProjet(id: string) {
    console.log("http://localhost:8081/projets/search/selectedProjetType?type="+id);
    return this.http.get("http://localhost:8081/projets/search/selectedProjetType?type="+id);
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

