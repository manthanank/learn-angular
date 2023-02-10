import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FromComponent } from './rxjs/operators/from/from.component';
import { OfComponent } from './rxjs/operators/of/of.component';
import { ToarrayComponent } from './rxjs/operators/toarray/toarray.component';
import { AjaxComponent } from './rxjs/operators/ajax/ajax.component';
import { ComponentsComponent } from './angular/components/components.component';
import { DirectivesComponent } from './angular/directives/directives.component';
import { DecoratorsComponent } from './angular/decorators/decorators.component';
import { PipesComponent } from './angular/pipes/pipes.component';
import { TimerComponent } from './rxjs/operators/timer/timer.component';
import { IntervalComponent } from './rxjs/operators/interval/interval.component';
import { FromeventComponent } from './rxjs/operators/fromevent/fromevent.component';
import { SwitchmapComponent } from './rxjs/operators/switchmap/switchmap.component';
import { MapComponent } from './rxjs/operators/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    OfComponent,
    ToarrayComponent,
    AjaxComponent,
    ComponentsComponent,
    DirectivesComponent,
    DecoratorsComponent,
    PipesComponent,
    TimerComponent,
    IntervalComponent,
    FromeventComponent,
    SwitchmapComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
