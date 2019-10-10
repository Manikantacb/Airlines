import { Component, OnInit } from '@angular/core';
import {UsrInfo} from '../usrinfo';
import {UsrInfoService} from '../app.userinfo';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

bookid;

  ngOnInit() {
  }
  usr:UsrInfo;
  constructor(private ud1:UsrInfoService) {
   
   }

  /* verify(objRef){
    console.log("Event Generated")
    console.log(objRef)
    this.ud1.checkUser(objRef);
  } */

  verify3(formObj3){
    console.log(formObj3);
    this.ud1.checkUserRe(formObj3);
    sessionStorage.setItem("bookid",formObj3.bookId);
    sessionStorage.setItem("date",formObj3.dates);
    console.log(formObj3.dates);
    //console.log(bookid);
  }



}
