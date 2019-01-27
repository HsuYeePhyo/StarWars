import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../starwars.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  constructor(private router: Router) { }
  
  route:string;
  ngOnInit() {   
  }
  category =  categories;
  
  //direct to category's items list
  chooseCategory(c: string){
      this.router.navigate(['',c]); 
  }
}
