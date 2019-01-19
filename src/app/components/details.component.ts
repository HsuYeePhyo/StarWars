import { Component, OnInit } from '@angular/core';
import { StarWarsSvc } from '../starwars.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Characters, Films, Species, Starships, Vehicles, Planets} from '../interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  constructor(private starWarSvc: StarWarsSvc, private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit() {
// const id = this.activatedRoute.snapshot.params.id;
// const item = this.activatedRoute.snapshot.params.item;
//
// this.starWarSvc.getDetails(item,id)
//     .then(result=> {
//         .then()
//     })
  }

}
