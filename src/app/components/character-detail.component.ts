import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StarWarsSvc } from '../starwars.service';
import { Characters, CharDexie } from '../interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { characterSvc } from '../character.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {

  @ViewChild('form') form: NgForm;
 
  constructor(private starWarSvc: StarWarsSvc, private activatedRoute: ActivatedRoute,
    private http: HttpClient, private commentDexie: characterSvc) { }
  
  id: number;
  character: Characters = null;
  show = 'hidden';
  charDexie: CharDexie = {name: "", comment:""};

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    const items = "Characters";

    this.starWarSvc.getDetails(items,this.id)
      .then((result)=>{
        this.character = result; 

        //parse from url to names
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

        //get comment from Dexie
        this.commentDexie.getComment(this.character.name)
          .then(result=>{     
            this.character.comment = result.comment;
          })
          //if no comment for this character in Dexie
          .catch(err=>{
            this.character.comment = 'Nill';
          })
        console.log(this.character);
      })
      .catch(err=>{
        console.error("Character Details Error: ",err)
      })  
    } 

    //show and hide text area for comment
  Edit(){
this.show = 'visible';
  } 
  Cancel(){
    this.show = 'hidden';    
  }
  saveComment(name: string){    
    this.charDexie.name = name;
    this.charDexie.comment = this.form.value['comment'];
    this.commentDexie.saveComment(this.charDexie)
      .then(()=>{
        this.form.reset();
        
        //display saved comment
        this.commentDexie.getComment(name)
          .then(result=>{
            this.character.comment = result.comment;
          })
      })
      .catch(err=>{
        console.error("Error at Comment: ", err);
      })
    
  }
}
