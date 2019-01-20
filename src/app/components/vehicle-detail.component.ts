import { Component, OnInit } from '@angular/core';
import { StarWarsSvc } from '../starwars.service';
import { ActivatedRoute } from '@angular/router';
import {Vehicles} from '../interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
 
  constructor(private starWarSvc: StarWarsSvc, private http: HttpClient,
    private activatedRoute: ActivatedRoute){}

    vehicle: Vehicles = null;
    pilot: Array<string> = [];
    id: number;

  ngOnInit() {
this.id = this.activatedRoute.snapshot.params.id;
const item = "Vehicles";
this.starWarSvc.getDetails(item,this.id)
    .then(result=> {
        this.vehicle = result;
        this.getPilot(this.vehicle.pilots);
        console.log("Vehicle: ", this.vehicle);
        console.log("Pilots: ", this.vehicle.pilots);
    })
    .catch(err=> {
      console.error("Vehicles Error: ", err);
    })
  }

  getPilot(p: Array<string>){
    if (p != null || p != []){
      p.forEach(item=>{
        this.http.get(item)
          .toPromise()
          .then(result=>{
            this.pilot.push(result["name"]);
            console.log("pilot: ", this.pilot);
          })
      }) 
      this.vehicle.pilots = this.pilot;       
    }   
    
  }

}
