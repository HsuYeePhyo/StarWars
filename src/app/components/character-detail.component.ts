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
        console.log(result);
        this.getHomeWorld(result["homeworld"]);   
      })
      .catch(err=>{
        console.error("Character Details Error: ",err)
      })
  }

  //get Planet name from url of API
  getHomeWorld(url: string){  
    this.http.get(url)
      .toPromise()
      .then(result=>{
        this.character.homeworld = result["name"];      
      })
      .catch(err=>{
        console.error("Get Home World Error: ", err);
      })
  }

}
