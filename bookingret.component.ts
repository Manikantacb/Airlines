import { Component, OnInit } from '@angular/core';
import {UsrInfoService} from '../app.userinfo';
import {PlaneDetails} from '../app.planeInfo';
import {UsrInfo} from '../usrinfo';
import {PlaneData} from '../planedata';
import{Booking} from '../booking'
@Component({
  selector: 'app-bookingret',
  templateUrl: './bookingret.component.html',
  styleUrls: ['./bookingret.component.css']
})
export class BookingretComponent implements OnInit {

  book:Array<Booking>
  
    constructor(private pd1:PlaneDetails,private ud1:
      UsrInfoService) {
  
        this.ud1.bookingretrieve().subscribe(data=>this.book=data);
       }

  ngOnInit() {
  }

}
