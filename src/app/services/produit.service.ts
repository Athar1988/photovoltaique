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
    this.router.navigate(['produits/'+produit]);
  }


  projets(projet: string) {
    console.log(projet);
    this.router.navigate(['projets/'+projet]);
    console.log('/projets/'+projet);
  }


  ajouterContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.http.post<Contact>("https://mysoleil.herokuapp.com/contacts", contact);
  }



  ajouterProjet(projet: Projet): Observable<Projet> {
    console.log(projet);
    return this.http.post<Projet>("https://mysoleil.herokuapp.com/projets", projet);
  }



  recupererLogin(){
    console.log("https://mysoleil.herokuapp.com/admins");
    return this.http.get("https://mysoleil.herokuapp.com/admins");
  }

  afficheProjet(id: string) {
    console.log("https://mysoleil.herokuapp.com/projets/search/selectedProjetType?type="+id);
    return this.http.get("https://mysoleil.herokuapp.com/projets/search/selectedProjetType?type="+id);
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  supprimerProjet(id){
    console.log(id._links.projet.href);
    return this.http.delete(id._links.projet.href);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}

