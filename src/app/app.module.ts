import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { FocusComponent } from './models/focus/focus.component';
import { HomeComponent } from './models/home/home.component';


import {TabMenuModule} from "primeng/tabmenu";
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    FocusComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    MenuModule,
    ButtonModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
