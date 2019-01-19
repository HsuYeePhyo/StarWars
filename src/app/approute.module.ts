import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories.component';
import { ItemsComponent } from './components/items.component';
import { DetailsComponent } from './components/details.component';
import { FilmDetailComponent } from './components/film-detail.component';

const ROUTES = [
    {path:"", component: CategoriesComponent},
    {path:"home", component: CategoriesComponent},
    {path:":items", component: ItemsComponent},
    {path:"Films/:id", component: FilmDetailComponent},
    {path:"Characters/:id", component: DetailsComponent},
    {path:"people/:id", component: DetailsComponent}
    
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