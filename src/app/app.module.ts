import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { SearchBusComponent } from './search-bus/search-bus.component';


import { CarouselConfigComponent } from './components/carousel-config/carousel-config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { material } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { BusFlightComponent } from './bus-flight/bus-flight.component';
import { BusHistoryComponent } from './bus-history/bus-history.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';


import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HeaderDirective } from './header/header.directive';
import { BuyingpageComponent } from './buyingpage/buyingpage.component';
import { BuyticketListComponent } from './buyticket-list/buyticket-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselConfigComponent,
    routingComponents,
    BusFlightComponent,
    BusHistoryComponent,
    BusSeatsComponent,
    SingupComponent,
    SinginComponent,
    SeatsComponent,
    CheckoutComponent,
    ScheduleComponent,
    LogoutComponent,
    HeaderDirective,
    BuyingpageComponent,
    BuyticketListComponent

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


