import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBusComponent } from './search-bus/search-bus.component'


import { CarouselConfigComponent } from './components/carousel-config/carousel-config.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule, routingComponents} from './app-routing.module'
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//material imports
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {material} from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatapickerComponent } from './datapicker/datapicker.component';



import { SearchBusToComponent } from './search-bus-to/search-bus-to.component';
import { BusFlightComponent } from './bus-flight/bus-flight.component';
import { BusHistoryComponent } from './bus-history/bus-history.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
import { BusBuyingWindowComponent } from './bus-buying-window/bus-buying-window.component';
import { HistoryPageComponent } from './history-page/history-page.component';

import { BusSearchService } from './bus-search.service';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselConfigComponent,
    routingComponents,
    SearchBusComponent,
    DatapickerComponent,
    SearchBusToComponent,
    BusFlightComponent,
    BusHistoryComponent,
    BusSeatsComponent,
    BusBuyingWindowComponent,
    HistoryPageComponent,
    SingupComponent,
    SinginComponent,
    SeatsComponent,
    CheckoutComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}


