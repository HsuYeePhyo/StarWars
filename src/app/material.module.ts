import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES =[ MatToolbarModule, MatCardModule, MatIconModule, FlexLayoutModule ];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule{}