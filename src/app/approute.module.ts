import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories.component';
import { ItemsComponent } from './components/items.component';
import { VehicleDetailComponent } from './components/vehicle-detail.component';
import { FilmDetailComponent } from './components/film-detail.component';
import { CharacterDetailComponent } from './components/character-detail.component';

const ROUTES = [
    {path:"", component: CategoriesComponent},
    {path:"home", component: CategoriesComponent},
    {path:":items", component: ItemsComponent},
    {path:"Films/:id", component: FilmDetailComponent},
    {path:"Characters/:id", component: CharacterDetailComponent},
    {path:"Vehicles/:id", component: VehicleDetailComponent}
    
    //error for catch all route >> to f/u
    // {path:"*", component: CategoriesComponent},
    // { path: "**", redirecTo: '', pathMatch: 'full' }
];
@NgModule({
    imports: [ RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRouteModule{
    
}