import { Component, OnInit } from '@angular/core';
import {UsrInfoService} from '../app.userinfo';
import {PlaneDetails} from '../app.planeInfo';
import {UsrInfo} from '../usrinfo';
import {PlaneData} from '../planedata';
@Component({
  selector: 'app-planeret',
  templateUrl: './planeret.component.html',
  styleUrls: ['./planeret.component.css']
})
export class PlaneretComponent implements OnInit {

  plane:Array<PlaneData>

  constructor(private pd1:PlaneDetails,private ud1:
    UsrInfoService) {

      this.ud1.Planeretrieve().subscribe(data=>this.plane=data);
     }

  ngOnInit() {
  }

}
