import { Component, OnInit } from '@angular/core';
import { Films } from '../interface';
import { StarWarsSvc } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private activatedRoute: ActivatedRoute){}
    film: Films = null;
    id: number;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    const item = "Films";

    this.starWarSvc.getDetails(item,this.id)
      .then(result =>{
          this.film = result;
          this.film.characters = this.starWarSvc.getPeopleNames(result.characters);
          console.log(this.film.characters);
      })
      .catch(err=>{
          console.error(">>>Film Details Error: ", err);
      })
  }

}
