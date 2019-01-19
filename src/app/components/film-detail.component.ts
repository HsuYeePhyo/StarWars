import { Component, OnInit } from '@angular/core';
import { Films } from '../interface';
import { StarWarsSvc } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private router: Router,
  private activatedRoute: ActivatedRoute){}
    film: Films = null;
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    const item = "Films";
    
    //cannot get image to work yet >> to f/u
    const imgPath = "./assets/images/"+item+'/'+id+".png";
   this.starWarSvc.getDetails(item,id)
      .then(result =>{
          this.film = result;
      })
      .catch(err=>{
          console.error(">>>Film Details Error: ", err);
      })
  }

}
