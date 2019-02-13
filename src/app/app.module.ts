import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './components/HomePageComponent/homepage.component'; 
import { AppComponent }  from './app.component';
import {HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HomePageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
