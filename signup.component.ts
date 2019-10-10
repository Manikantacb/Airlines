import { Component, OnInit } from '@angular/core';
import {UsrInfo} from '../usrinfo';
import {UsrInfoService} from '../app.userinfo';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
usr:UsrInfo;
  constructor(private ud1:UsrInfoService) { }

  ngOnInit() {
  }
  verify1(objRef){
    console.log("Event Generated")
    console.log(objRef)
    this.ud1.checkUser1(objRef);
  }

}
