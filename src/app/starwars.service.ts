import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Items, Characters, Films, Species, Starships, Vehicles, Planets} from './interface';


export const URL = "https://swapi.co/api/";
export const categories = [ "Characters", "Films", "Species", "Starships", "Vehicles", "Planets"];
const catforUrl = [ "people", "films", "species", "starships", "vehicles", "planets"];

//difference in character for display and url params
function getParam(n: string){
return (catforUrl[categories.indexOf(n)]);
}

@Injectable()
export class StarWarsSvc{
    constructor (private http: HttpClient){}
    getCatItems(cat: string): Promise<Items[]>{

        //change to api url param
        let param = getParam(cat);
        return (            
            this.http.get(URL+param)
                .toPromise()
                .then(result =>{
                    const item: Items[] = [];                  
                    for (let c of result["results"])
                    {   
                        let i: Items = { name: "", category: "", catUrl: "", url:""};  
                        if (cat ==="Films"){  
                                i.name = c.title;
                        }
                        else{
                            i.name = c.name;
                        }
                       
                        i.category = cat;     //for heading                    
                        i.catUrl = param;   
                        i.url=c.url;
                        item.push(i);
                    }
                    return item;
                    })
        )
    }
  
    getDetails(item: string, id: number):Promise<any>
    {                    
        item = getParam(item);
        console.log("Param for details: ", item);        
        const detailsURL = URL + item+"/"+id;
        console.log("Details URL: ", detailsURL);
            return(
                    this.http.get(detailsURL)
                        .toPromise()                        
                )                
            }
    }

