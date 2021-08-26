import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.component.html',
  styleUrls: ['./detailprojet.component.css']
})
export class DetailprojetComponent implements OnInit {
projet: any;
id:any;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.projet = this.route.params.subscribe(params => {
        this.id=params['id'];

      },
      err=>{
        console.log("probleme d'affcihage");
      });

    console.log( this.projet.type +" id");
  }

}
