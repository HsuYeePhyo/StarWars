import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private location: Location, private router: Router){}

  //go to home page
  home(){
    this.router.navigate(['']);
  }
  //for back button on toolbar
  goBack(){
    if(this.location.path() != this.router.url){
     this.router.navigate(['']);
    }
    else
    this.location.back();
  }

  //share on android
  share(){
    let newVariable: any;
    newVariable = window.navigator;

    if(newVariable && newVariable.share){
      let url = document.location.href;
      var  canonicalElement = < HTMLAnchorElement >document.querySelector('link[rel=canonical]');
      if(canonicalElement !== null) {
          url = canonicalElement.href;
      }
      newVariable.share({
        title: document.title,
        url: url
      }).then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    }
  
      else{
        alert('share not supported');
      }
    
    }

  }