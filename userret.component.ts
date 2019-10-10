import { Component, OnInit } from '@angular/core';
import {UsrInfoService} from '../app.userinfo';
import {PlaneDetails} from '../app.planeInfo';
import {UsrInfo} from '../usrinfo';
import {PlaneData} from '../planedata';
@Component({
  selector: 'app-userret',
  templateUrl: './userret.component.html',
  styleUrls: ['./userret.component.css']
})
export class UserretComponent implements OnInit {
  usri:Array<UsrInfo>
  
  constructor(private pd1:PlaneDetails,private ud1:
    UsrInfoService) {

      this.ud1.Userretrieve().subscribe(data=>this.usri=data);
     }

  ngOnInit() {
  }

}
