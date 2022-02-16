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

  //host="http://localhost:8080/";
  host="https://mysoleil.herokuapp.com/";
  constructor(private router: Router, private http: HttpClient) { }


  produits(produit: string) {
    this.router.navigate(['produits/'+produit]);
  }


  projets(projet: string) {
    this.router.navigate(['projets/'+projet]);
  }


  ajouterContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.host+"contacts", contact);
  }



  ajouterProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.host+"projets", projet);
  }



  recupererLogin(){
    return this.http.get(this.host+"admins");
  }

  afficheProjet(id: string) {
    return this.http.get(this.host+"projets/search/selectedProjetType?type="+id);
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  supprimerProjet(id){
    return this.http.delete(id._links.projet.href);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}

