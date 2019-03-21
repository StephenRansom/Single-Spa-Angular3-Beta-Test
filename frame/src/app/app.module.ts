import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
   {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/frame/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
