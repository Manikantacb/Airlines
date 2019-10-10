import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import {HttpClientModule} from '@angular/common/http'; 
import {UsrInfoService} from 'src/app/app.userinfo';
import{PlaneDetails} from './app.planeInfo'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RescheduleComponent } from './reschedule/reschedule.component';

import { BookingComponent } from './booking/booking.component';
import { CancelComponent } from './cancel/cancel.component';
import { SignupComponent } from './signup/signup.component'
import {Routes,RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { RescheduleBookflightComponent } from './reschedule-bookflight/reschedule-bookflight.component';
import { AdminComponent } from './admin/admin.component';
import { PlaneretComponent } from './planeret/planeret.component';
import { UserretComponent } from './userret/userret.component';
import { BookingretComponent } from './bookingret/bookingret.component';
import { SeatretComponent } from './seatret/seatret.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { PlaneinsertComponent } from './planeinsert/planeinsert.component';

const routes:Routes=[
  {path:'success1',component:HomeComponent}, 
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'reschedule',component:RescheduleComponent},
  {path:'book',component:BookComponent},
  {path:'BookFlight',component:BookFlightComponent},
  {path:'',redirectTo:'login',pathMatch:'prefix'},
  {path:'cancel',component:CancelComponent},
  {path:'reschedule-book',component:RescheduleBookflightComponent },
  {path:'admin',component:AdminComponent},
  {path:'planeret',component:PlaneretComponent },
  {path:'bookingret',component: BookingretComponent},
  {path:'userret',component:UserretComponent },
  {path:'seatret',component:SeatretComponent},
  {path:'bill',component: BillComponent},
  {path:'payment',component:PaymentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    LoginComponent,
    HomeComponent,
    RescheduleComponent,
    BookingComponent,
    CancelComponent,
    SignupComponent,
    MenuComponent,
    BookComponent,
    BookFlightComponent,
    RescheduleBookflightComponent,
    AdminComponent,
    PlaneretComponent,
    UserretComponent,
    BookingretComponent,
    SeatretComponent,
    BillComponent,
    PaymentComponent,
    PlaneinsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [UsrInfoService,PlaneDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
