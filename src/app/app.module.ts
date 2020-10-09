import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPoSTQRcYogMBiJCUtW_LJlNTyOT9_H2w'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
