import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule
  ]
})
export class SharedModule { }
