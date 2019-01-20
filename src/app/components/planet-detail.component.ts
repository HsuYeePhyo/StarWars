import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { StarWarsSvc } from '../starwars.service';
import { Planets } from '../interface';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {  

  constructor(private starWarSvc: StarWarsSvc, private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

    planet: Planets;
    id: number;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let item = "Planets";
    this.starWarSvc.getDetails(item,this.id)
        .then(result=>{
          this.planet = result;
          if (result.residents != null || result.residents != []){
            this.planet.residents = this.starWarSvc.getPeopleNames(result.residents);
          }   
          if(result.films != null || result.films != [])       {
            this.planet.films = this.starWarSvc.getFilmNames(result.films);
          }
        })
  }
    }
