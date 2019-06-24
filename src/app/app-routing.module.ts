import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryListComponent } from './history-list/history-list.component';
import { BuyticketListComponent } from './buyticket-list/buyticket-list.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { from } from 'rxjs';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { BuyingpageComponent } from './buyingpage/buyingpage.component';

const routes: Routes = [
  { path: 'history-list', component: HistoryListComponent, canActivate: [AuthGuardService] },
  { path: 'buyticket-list', component: BuyticketListComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: SingupComponent },
  { path: 'signin', component: SinginComponent },
  { path: 'seats', component: SeatsComponent, canActivate: [AuthGuardService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'buypage', component: BuyingpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HistoryListComponent, BuyticketListComponent]