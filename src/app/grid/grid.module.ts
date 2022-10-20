import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GridComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    ReactiveFormsModule
  ]
})
export class GridModule { }
