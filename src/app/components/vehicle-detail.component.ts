import { Component, OnInit } from '@angular/core';
import { StarWarsSvc } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicles } from '../interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  constructor(private starWarSvc: StarWarsSvc, private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  vehicle: Vehicles = null;
  id: number;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    const item = "Vehicles";
    this.starWarSvc.getDetails(item, this.id)
      .then(result => {
        this.vehicle = result;
        if (result.pilots != null || result.pilots != []) {
          this.vehicle.pilots = this.starWarSvc.getPeopleNames(result.pilots);
        }
        if (result.films != null || result.films != []) {
          this.vehicle.fimls = this.starWarSvc.getFilmNames(result.films);
        }
      })
      .catch(err => {
        console.error("Vehicles Error: ", err);
      })
  }
}
