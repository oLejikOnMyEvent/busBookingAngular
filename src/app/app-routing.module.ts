import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryListComponent } from './history-list/history-list.component';
import { BuyticketListComponent } from './buyticket-list/buyticket-list.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { BuyingpageComponent } from './buyingpage/buyingpage.component';
import {PendingBookingComponent} from './pending-booking/pending-booking.component'
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  { path: 'history-list', component: HistoryListComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'buyticket-list', pathMatch: 'full'},
  { path: 'buyticket-list', component: BuyticketListComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'login', component: SinginComponent },
  { path: 'seats/:id/:from/:to', component: SeatsComponent, canActivate: [AuthGuardService] },
  { path: 'checkout/:bookingid/:id/:cityFrom/:cityTo/:dateArrival/:dateDeparture/:price/:seat',
  component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'buypage', component: BuyingpageComponent },
  {path :'pandingpay', component: PendingBookingComponent, canActivate: [AuthGuardService] },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo : '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HistoryListComponent, BuyticketListComponent, PendingBookingComponent]