import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryListComponent } from './history-list/history-list.component';
import { BuyticketListComponent } from './buyticket-list/buyticket-list.component';
import { SingupComponent} from './auth/singup/singup.component';
import {  SinginComponent } from './auth/singin/singin.component';
import { from } from 'rxjs';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: 'history-list', component: HistoryListComponent },
  {path: 'buyticket-list', component: BuyticketListComponent },
  {path: 'signup', component: SingupComponent },
  {path: 'signin', component: SinginComponent},
  {path: 'seats', component: SeatsComponent},
  {path: 'checkout', component: CheckoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HistoryListComponent,BuyticketListComponent]