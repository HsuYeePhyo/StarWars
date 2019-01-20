import { Component, OnInit } from '@angular/core';
import { StarWarsSvc } from '../starwars.service';
import { Characters } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }
  
  id: number;
  character: Characters = null;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    const items = "Characters";
    console.log(items);
    this.starWarSvc.getDetails(items,this.id)
      .then((result)=>{
        this.character = result; 

        this.starWarSvc.getfromAPIurl(result["homeworld"])  
        .then(result=>{
          this.character.homeworld = result["name"];      
        }) 
        if(result.films != null){
          this.character.films = this.starWarSvc.getFilmNames(result.films);
        }
        if(result.species !=null){
          this.character.species = this.starWarSvc.getPeopleNames(result.species);
        }
        if(result.vehicles != null || result.vehicles != []){
          this.character.vehicles = this.starWarSvc.getPeopleNames(result.vehicles);
        }
        if(result.starships != null || result.starships !=[]){
          this.character.starships = this.starWarSvc.getPeopleNames(result.starships);
        }
      })
      .catch(err=>{
        console.error("Character Details Error: ",err)
      })
  }
}
