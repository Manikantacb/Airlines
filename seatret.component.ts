import { Component, OnInit } from '@angular/core';
import {UsrInfoService} from '../app.userinfo';
import {PlaneDetails} from '../app.planeInfo';
import {UsrInfo} from '../usrinfo';
import {PlaneData} from '../planedata';
import {Seat} from '../seat'
@Component({
  selector: 'app-seatret',
  templateUrl: './seatret.component.html',
  styleUrls: ['./seatret.component.css']
})
export class SeatretComponent implements OnInit {

  seat1:Array<Seat>
  
    constructor(private pd1:PlaneDetails,private ud1:
      UsrInfoService) {
  
        this.ud1.Seatretrieve().subscribe(data=>this.seat1=data);
       }

  ngOnInit() {
  }

}
