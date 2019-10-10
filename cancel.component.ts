import { Component, OnInit } from '@angular/core';
import {UsrInfoService} from '../app.userinfo'

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  constructor(private ud1:UsrInfoService) { }

  ngOnInit() {
  }
  verify4(formObj4)
  {
    console.log(formObj4);
    this.ud1.checkUserCancel(formObj4);
  }

  
}
