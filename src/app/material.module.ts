import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule} from '@angular/material/input';

const MODULES =[ MatToolbarModule, MatCardModule, MatIconModule, FlexLayoutModule, MatInputModule ];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule{}