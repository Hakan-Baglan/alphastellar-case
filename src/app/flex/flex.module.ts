import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import { FlexRoutingModule } from './flex-routing.module';
import { FlexFormComponent } from './flex-form/flex-form.component';



@NgModule({
  declarations: [
    FlexComponent,
    FlexFormComponent,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule
  ]
})
export class FlexModule { }
