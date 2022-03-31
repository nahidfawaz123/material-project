import { CoreModule } from './core/core.module';
import { AddMaterailModule } from './add-materail/modules/add-materail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/module/home.module';
import { FormsModule } from '@angular/forms';
import {MaterailModule}from './search-materail/modules/materail.module';
import { ShowMaterailComponent } from './search-materail/show-materail/show-materail.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowMaterailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddMaterailModule,
    MaterailModule,
    HomeModule,
    CoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
