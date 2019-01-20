import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { StarWarsSvc } from '../starwars.service';
import { Starships } from '../interface';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private activatedRoute: ActivatedRoute) { }

    starship: Starships;
    id: number;
    pilot = []; film =[];
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let item = "Starships";
    this.starWarSvc.getDetails(item,this.id)
        .then(result=>          
          {
            this.starship = result;

            //Get pilot name from url
            if(result.pilots!= null || result.pilots !=[]){               
                this.pilot = this.starWarSvc.getPeopleNames(result.pilots);
            }

            //Get film name from returned url
            (result.films).forEach(item=>{
              this.film = this.starWarSvc.getFilmNames(result.films);
            })
        })
  }

}
