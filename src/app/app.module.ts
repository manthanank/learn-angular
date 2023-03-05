import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TypescriptComponent } from './docs/typescript/typescript.component';
import { AngularMaterialComponent } from './docs/angular-material/angular-material.component';
import { AngularComponent } from './docs/angular/angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsComponent } from './docs/angular/forms/reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TypescriptComponent,
    AngularMaterialComponent,
    AngularComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
