import { Component, OnInit } from '@angular/core';
import {PlaneDetails} from '../app.planeInfo';
//import {PlaneInfo} from '../plane'
import {AppComponent} from '../app.component'
import {Router} from '@angular/router'
import {PlaneData} from '../planedata';
import {UsrInfo} from '../usrinfo';
import {UsrInfoService} from '../app.userinfo'

@Component({
  selector: 'app-reschedule-bookflight',
  templateUrl: './reschedule-bookflight.component.html',
  styleUrls: ['./reschedule-bookflight.component.css']
})
export class RescheduleBookflightComponent implements OnInit {
  data:Array<PlaneData>;
  flag:boolean=false;
  email;
  fltno;
  price;
  bookid:number;
  usr:UsrInfo;

  constructor(private pd1:PlaneDetails,private router:Router,private ud1:
    UsrInfoService){
    this.email = sessionStorage.getItem("loginUser");
    this.bookid =parseInt(sessionStorage.getItem("bookid"));
    //this.fltno=sessionStorage.getItem("flightnumber")
      }

  verifyPlane(PlRef){
    console.log(PlRef)
    
    this.pd1.checkPlane(PlRef).subscribe(val=>this.data=val);
    //this.pd1.checkPlane(PlRef).subscribe(val=>console.log(val));
    this.flag=true;
    //this.router.navigate(['flightbook'])
    sessionStorage.setItem("flightnumber",PlRef.emailId);
  }
  title = 'plane';
  pln:Array<PlaneData>;
  userInfoData:UsrInfo;
  bookFlag:boolean = false;
flag1:boolean = false;
  bookFun(index){
    this.fltno=this.data[index].fltno
    console.log("this "+this.fltno)
    let email = sessionStorage.getItem("loginUser");
    this.ud1.checkUser3(email).subscribe(val=>{this.bookFlag=true;this.userInfoData=val});
  /*  console.log("Date loaded "+this.userInfoData);
    this.flag1=true;
    let fltNumber = sessionStorage.getItem("fltNumber");
    console.log(email);
    console.log(fltNumber);
    console.log("Value is "+index);
   console.log(this.data[index].fltno);
   //this.router.navigate(['confirm']);
    */
  }

  confirmBooking1(formObj,bookid){
    console.log(formObj)
    
    this.ud1.checkBooking1(formObj);
    this.ud1.checkBooking2(this.bookid);

  }
  ngOnInit() {
  }


}
