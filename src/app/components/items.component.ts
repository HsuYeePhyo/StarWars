import { Component, OnInit, Input, Output } from '@angular/core';
import { StarWarsSvc, URL } from '../starwars.service';
import { Items }from '../interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Items[] = [];
  
  constructor(private starWarSvc: StarWarsSvc, private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit() {    
    const category = this.activatedRoute.snapshot.params.items;    
    this.starWarSvc.getCatItems(category)
      .then(result =>{
        this.items = result;
        let title = this.items[0].category;
      })
      .catch(err=>{
        console.error(">>>Items Error: ", err);
      })
  }

  chooseItem(i: Items){
    //get id for image
    //remove base url + category para + '/' and last '/' from url
    let id = (i.url.slice((URL+i.catUrl).length, i.url.length-1).replace('/',''));  
    this.router.navigate(['',i.category,id]);
  }
}
