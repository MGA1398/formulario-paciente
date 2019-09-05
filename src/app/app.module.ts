import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MyMaterialModule } from './material.module';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BuscadorComponent } from './buscador/buscador.component';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MyMaterialModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue : {float: 'never'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
