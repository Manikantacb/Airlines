import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsrInfoService} from '../app.userinfo';
import {PlaneDetails} from '../app.planeInfo';
import {UsrInfo} from '../usrinfo';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private pd1:PlaneDetails,private router:Router,private ud1:
  UsrInfoService) { }

  ngOnInit() {
  }
  flight(){
    this.router.navigate(['planeret']);
  }

  user(){
    this.router.navigate(['userret']);
  }

  booking(){
    this.router.navigate(['bookingret']);
  }
  seat(){
    this.router.navigate(['seatret']);
  }
  logout(){
    this.router.navigate(['login']);
  }
}
