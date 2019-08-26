import { BrowserModule } from '@angular/platform-browser';


import { NgModule,  } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS  } from '@angular/common/http';


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



import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HeaderDirective } from './header/header.directive';
import { BuyingpageComponent } from './buyingpage/buyingpage.component';
import { BuyticketListComponent } from './buyticket-list/buyticket-list.component';
import { BasicAuthHttpInterceptorService} from './auth/basic-auth-http-interceptor.service';
import { PendingBookingComponent } from './pending-booking/pending-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SortDataPipe } from './bus-history/sort-data.pipe'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselConfigComponent,
    routingComponents,
    BusFlightComponent,
    BusHistoryComponent,
    SingupComponent,
    SinginComponent,
    SeatsComponent,
    CheckoutComponent,
    ScheduleComponent,
    LogoutComponent,
    HeaderDirective,
    BuyingpageComponent,
    BuyticketListComponent,
    PendingBookingComponent,
    NotFoundComponent,
    PreloaderComponent,
    SortDataPipe

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
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}


