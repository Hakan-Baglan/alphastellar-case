import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { colorReducer, selectedColorReducer } from 'src/store/reducers/color.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ colors: colorReducer, color: selectedColorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
