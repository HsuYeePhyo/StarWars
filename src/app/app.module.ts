import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteModule } from './approute.module';
import { StarWarsSvc } from './starwars.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './components/items.component';
import { CategoriesComponent } from './components/categories.component';
import { VehicleDetailComponent } from './components/vehicle-detail.component';
import { FilmDetailComponent } from './components/film-detail.component';
import { CharacterDetailComponent } from './components/character-detail.component';
import { SpeciesDetailComponent } from './components/species-detail.component';
import { StarshipDetailComponent } from './components/starship-detail.component';
import { PlanetDetailComponent } from './components/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CategoriesComponent,
    VehicleDetailComponent,
    FilmDetailComponent,
    CharacterDetailComponent,
    SpeciesDetailComponent,
    StarshipDetailComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,    BrowserAnimationsModule,
    MaterialModule,   HttpClientModule,
    AppRouteModule
  ],
  providers: [ StarWarsSvc ],
  bootstrap: [AppComponent]
})
export class AppModule { }
