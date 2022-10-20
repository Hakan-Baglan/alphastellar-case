import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import { FlexRoutingModule } from './flex-routing.module';



@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    CommonModule,
    FlexRoutingModule
  ]
})
export class FlexModule { }
