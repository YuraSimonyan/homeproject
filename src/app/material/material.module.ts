import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule
];


@NgModule({

  imports: [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
