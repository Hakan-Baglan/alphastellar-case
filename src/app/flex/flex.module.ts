import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import { FlexRoutingModule } from './flex-routing.module';
import { FlexFormComponent } from './flex-form/flex-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FlexComponent,
    FlexFormComponent,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    ReactiveFormsModule
  ]
})
export class FlexModule { }
