import { Component, OnInit } from '@angular/core';
import {UsrInfo} from '../usrinfo';
import {UsrInfoService} from '../app.userinfo'
import {PlaneData} from '../planedata'
import {PlaneDetails} from '../app.planeInfo'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
flag:boolean= false;
  ngOnInit() {
  }
 
   plane:Array<PlaneData>;
   userInfoData:UsrInfo;
  usr:UsrInfo;
  constructor(private ud1:UsrInfoService,private p:PlaneDetails,private router:Router){
    
      }

verify(objRef){
  console.log("Event Generated")
  console.log(objRef)
  this.ud1.checkUser(objRef);
}

verify2(objRef){
  console.log(objRef)
  this.flag=true;
  this.ud1.checkUser2(objRef).subscribe(data=>this.plane=data);
  this.ud1.checkUser2(objRef).subscribe(data=>console.log(data));
}
signup(){
  this.router.navigate(['signup']);
}

}
