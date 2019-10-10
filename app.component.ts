import { Component } from '@angular/core';
import {UsrInfo} from './usrinfo';
import {UsrInfoService} from './app.userinfo'
import {PlaneData} from './planedata'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
 /*usr:UsrInfo;
  constructor(private ud1:UsrInfoService){
    
      }

verify(objRef){
  console.log("Event Generated")
  console.log(objRef)
  this.ud1.checkUser(objRef);
}

verify2(objRef){
  console.log(objRef)
  this.ud1.checkUser2(objRef);
}*/
  /*let a=objRef.user;
  let b=objRef.pass;
  if(a=="mani" && b=="123"){
    this.msg="successful login"
  }
  else{
    this.msg="login failed"
  }
}*/

}
