import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { StarWarsSvc } from '../starwars.service';
import { Species } from '../interface';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

    species: Species;
    id: number;
    people = [];

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let item = "Species";
    this.starWarSvc.getDetails(item,this.id)
        .then(result=>
          {
              this.species = result;
              if(result.homeworld != null)
              {
                this.starWarSvc.getfromAPIurl(result.homeworld)
                  .then(result=>{
                    this.species.homeworld = result["name"];
                  })
              }
              if (result.people != null || result.people != []){
              this.species.people = this.starWarSvc.getPeopleNames(result.people);
              }
              if(result.films != null || result.films != []){
                this.species.films = this.starWarSvc.getFilmNames(result.films);
              }

      })
    }

}
